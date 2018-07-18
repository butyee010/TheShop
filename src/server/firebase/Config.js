const firebase = require("firebase-admin");
var serviceAccount = require('./serviceAccountKey.json');

var config = {
  apiKey: "AIzaSyAyyzSk4ys2E8_M4Vjs2YrHZ9AsE4zdkus",
  authDomain: "theshop-c844d.firebaseapp.com",
  databaseURL: "https://theshop-c844d.firebaseio.com",
  projectId: "theshop-c844d",
  storageBucket: "theshop-c844d.appspot.com",
  messagingSenderId: "1051613159163",
  appName: "TheShop",
  credential: firebase.credential.cert(serviceAccount)
};

firebase.initializeApp(config);
var db = firebase.firestore();
//end config


var docRef = db.collection('user').doc('test');

var setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

db.collection('users').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
