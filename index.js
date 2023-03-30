//Import the tools we need from firebase-admin
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

//Import our credentials from a secret file
import { credentials } from "./credentials.js";

//Connect to our Firebase project
initializeApp({
  credential: cert(credentials)
})

//Connect to Firestore database
const db = getFirestore();

//game objects to add to db
const game1 = {
  name: 'contra',
  type: 'video game',
  price: 20,
  gameConsole: 'Nintendo'

}
const game2 = {
  name: 'street fighter',
  type: 'video game',
  price: 45,
  gameConsole: 'Super Nintendo'

}
const game3 = {
  name: 'Joe Montana SportsTalk Football',
  type: 'video game',
  price: 30,
  gameConsole: 'Sega Genesis'

}
const game4 = {
  name: 'ken griffy jr baseball',
  type: 'video game',
  price: 40,
  gameConsole: 'Super Nintendo'

}
const game5 = {
  name: 'NBA Jam',
  type: 'video game',
  price: 50,
  gameConsole: 'Sega Genesis'

}

//Add game
// db.collection('games').add(game5)
// .then(doc => {
//   console.log("added doc: " + doc.id)
// })
// .catch(console.log);

db.collection('games').get()
.then(collection => {
  const productList = collection.docs.map(doc => ({...doc.data(), id: doc.id}));
  console.table(productList);
})
.catch(console.log());

