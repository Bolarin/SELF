   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
var firebaseConfig = {
   apiKey: "AIzaSyCoikgqZDEkgK_j8boP0ONz2LZfwt0vTM8",
   authDomain: "self-learned.firebaseapp.com",
   projectId: "self-learned",
   storageBucket: "self-learned.appspot.com",
   essagingSenderId: "544830557015",
   appId: "1:544830557015:web:e9b807fdc88f71a575cc12",
   measurementId: "G-G71Y5VF7XE"
};
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    firebase.analytics();
   
const auth = firebase.auth();

function signUp() {
      
   var email = document.getElementById("email");
   var password = document.getElementById("password");

   const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
   promise.catch(e => alert(e.message));

   alert("Registered");

}

function signIn() {
      
   var email = document.getElementById("email");
   var password = document.getElementById("password");

   const promise = auth.signInWithEmailAndPassword(email.value, password.value);
   promise.catch(e => alert(e.message));

   alert("Logged in " + email.value);

}

function signOut() {
   auth.signOut();
   alert("Logged out");
}

firebase.auth().onAuthStateChanged(function (user) {
   if (user) {
      var email = user.email;
     // alert("Active user: " + email);
    //  window.location.href = "/Users/Ayo/Desktop/Self HTML/home.html";
   }
   else {
      //alert("No active user");
     //window.location.href = "/Users/Ayo/Desktop/Self HTML/login.html";

   }
})

  