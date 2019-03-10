import firebase from 'firebase';

// Initialize Firebase
  let config = {
      apiKey: "AIzaSyCo9kGxOOAAMYvlaqJm4LdMvy8nSBnJLfg",
      authDomain: "gift-decider.firebaseapp.com",
      databaseURL: "https://gift-decider.firebaseio.com",
      projectId: "gift-decider",
      storageBucket: "gift-decider.appspot.com",
      messagingSenderId: "922678920959"
  };
  firebase.initializeApp(config);


export default firebase