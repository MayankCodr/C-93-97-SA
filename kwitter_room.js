
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBJfMPk5lUWZBMQIC9u3LIltXbaifXTUhI",
  authDomain: "kwitter-8a74e.firebaseapp.com",
  databaseURL: "https://kwitter-8a74e-default-rtdb.firebaseio.com",
  projectId: "kwitter-8a74e",
  storageBucket: "kwitter-8a74e.appspot.com",
  messagingSenderId: "494585090454",
  appId: "1:494585090454:web:8fc6ad154bb7d2e55e8db7"
};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML  = "Welcome " + user_name + " !"; 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " + Room_names);
      row = "<div class = 'room_name' id = "+ Room_names + " onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();


function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding rooms"

  });
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
  console.log("room_name - " + name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}