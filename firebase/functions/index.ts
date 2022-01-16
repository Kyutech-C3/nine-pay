import {firestore as _firestore, initializeApp} from "firebase-admin";
import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


initializeApp();

const rateThingMinute = 1;

/**
 * 受け取ったUserのポイントを計算し反映する
 * @param {_firestore.DocumentReference<_firestore.DocumentData>} user
 *  ポイント計算を行うUserのReference
 */
async function calcPoints(
    user: _firestore.DocumentReference<_firestore.DocumentData>
) {
  const coll = user.collection("things");
  const docs = await coll.get();
  const consumePoints = docs.size * rateThingMinute;

  const userDoc = await user.get();

  const currentPoints = userDoc.get("points") || 0;
  user.update({
    points: currentPoints - consumePoints,
  });
  console.log(
      `${userDoc.get("name")} has consumed ${consumePoints}`,
      `points -> ${currentPoints - consumePoints}`
  );
}

export const scheduledPointCalculator =
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
