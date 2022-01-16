const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// import {firestore as _firestore, initializeApp} from "firebase-admin";
const admin = require('firebase-admin')
const _firestore = admin.firestore


admin.initializeApp();

const rateThingMinute = 1;

//push通知実行メソッド
const pushMessage = (fcmToken, text) => ({
  notification: {
    title: '新しいオファーを受信しました。',
    body:  `${text}`,
  },
  apns: {
    headers: {
      'apns-priority': '10'
    },
    payload: {
      aps: {
        badge: 9999,
        sound: 'default'
      }
    }
  },
  data: {
    data: 'test',
  },
  token: fcmToken
});

/**
 * 受け取ったUserのポイントを計算し反映する
 * @param {_firestore.DocumentReference<_firestore.DocumentData>} user
 *  ポイント計算を行うUserのReference
 */
async function calcPoints(
  user
) {
  const coll = user.collection("things");
  const docs = await coll.get();
  const consumePoints = docs.size * rateThingMinute;

  const userDoc = await user.get();

  const currentPoints = userDoc.get("points") || 0;
  if(currentPoints <= 0) {
    functions.logger.log(`${userDoc.get("name")}'s points has exhausted`)
    admin.messaging().send(pushMessage(userDoc.get("token"), '通知'))
    return true
  }
  user.update({
    points: currentPoints - consumePoints,
  });
  functions.logger.log(
      `${userDoc.get("name")} has consumed ${consumePoints}`,
      `points -> ${currentPoints - consumePoints}`
  );

  return false
}

async function applyAlertFlag(alertFlag) {
  const firestore = _firestore();
  const docRef = firestore.doc("state/1");
  await docRef.update({
    alertFlag
  })
}

exports.scheduledPointCalculator =
  functions.pubsub.schedule("every 1 minutes").onRun(
      async () => {
        const firestore = _firestore();

        const coll = firestore.collection("users");
        const docs = await coll.get();

        let alertFlag = false;
        await Promise.all(
          docs.docs.map(
            async (d) => {
              const flag = await calcPoints(d.ref);
              if(flag) alertFlag = true
            }
          )
        );

        await applyAlertFlag(alertFlag)
      }
  );
