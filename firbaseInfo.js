
/*const firebaseConfig = {
  apiKey: "AIzaSyBg9mZWREiFEKm-Yjg8I7MTE8TYGF2Xj5g",
  authDomain: "sohel131.firebaseapp.com",
  projectId: "sohel131",
  storageBucket: "sohel131.appspot.com",
  messagingSenderId: "527697088316",
  appId: "1:527697088316:web:7e97549007b03333f89839",
  measurementId: "G-CM39JE9TY1"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyBg9mZWREiFEKm-Yjg8I7MTE8TYGF2Xj5g",
  authDomain: "sohel131.firebaseapp.com",
  projectId: "sohel131",
  storageBucket: "sohel131.appspot.com",
  messagingSenderId: "527697088316",
  appId: "1:527697088316:web:7e97549007b03333f89839",
  measurementId: "G-CM39JE9TY1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



//------------to store data to database--------------------------------//
/*const db = firebase.firestore();
const collectionRef = db.collection("user");

// Add a document to the collection
collectionRef.add({
  name: "sohel",
  phone: "102",
  // Add more fields as needed
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});
*/
const dbr = firebase.firestore();
const collectionRefr = dbr.collection("user");

// Fetch data from a collection
collectionRefr.get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc)
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

const data = {
  name: "sohel",
  phone: "017"
}

export default data;