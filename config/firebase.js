const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // chave do firebase

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-60e46-default-rtdb.firebaseio.com/",
});

const db = admin.database();

module.exports = db;
