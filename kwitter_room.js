var firebaseConfig = {
    apiKey: "AIzaSyDrzu0sxpbI6f-HEZTmb2hx5p4a_5NJ2gk",
    authDomain: "p-94-c200c.firebaseapp.com",
    databaseURL: "https://p-94-c200c-default-rtdb.firebaseio.com",
    projectId: "p-94-c200c",
    storageBucket: "p-94-c200c.appspot.com",
    messagingSenderId: "145290628263",
    appId: "1:145290628263:web:a326e4d21f1e75904e9f82",
    measurementId: "G-86DSGNZ21C"
  };
  
  firebase.initializeApp(firebaseConfig);

  function addRoom()

  {
      room = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room).update({

          purpose : "adding room"

      });

      localStorage.setItem("room_name", room);

  }
  