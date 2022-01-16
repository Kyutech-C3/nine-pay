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
    return
  }
  user.update({
    points: currentPoints - consumePoints,
  });
  functions.logger.log(
      `${userDoc.get("name")} has consumed ${consumePoints}`,
      `points -> ${currentPoints - consumePoints}`
  );
}

exports.scheduledPointCalculator =
  functions.pubsub.schedule("every 1 minutes").onRun(
      async () => {
        const firestore = _firestore();

        const coll = firestore.collection("users");
        const docs = await coll.get();
        docs.forEach((d) => {
          calcPoints(d.ref);
        });
      }
  );
