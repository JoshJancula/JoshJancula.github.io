 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyBCogGYJgHq6qekiGKL3RZOM32tJmm3JMU",
   authDomain: "webpagecontacts.firebaseapp.com",
   databaseURL: "https://webpagecontacts.firebaseio.com",
   projectId: "webpagecontacts",
   storageBucket: "webpagecontacts.appspot.com",
   messagingSenderId: "43556131936"
 };
 firebase.initializeApp(config);

 var database = firebase.database();

 $("#submitMessage").on("click", function(event) {
   event.preventDefault();

   // Grabbed values from text boxes
   var name = $("#name").val().trim();
   var email = $("#email").val().trim();
   var message = $("#message").val().trim();

   // Code for handling the push
   database.ref().push({
     name: name,
     email: email,
     message: message,
     dateAdded: firebase.database.ServerValue.TIMESTAMP
   });

   $("#name").val("");
   $("#email").val("");
   $("#message").val("");

 });
 