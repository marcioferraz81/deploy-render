const admin = require("firebase-admin");
//local
//const serviceAccount = require("./serviceAccountKey.json"); // chave do firebase

//para render
const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-60e46-default-rtdb.firebaseio.com/",
});

const db = admin.database();

module.exports = db;
