// Configuração do Firebase de seu aplicativo
const firebaseConfig = {
    apiKey: "AIzaSyAt5RYo6OV5C0HJVFY0ryJT0i-zEEt7xFM",
    authDomain: "vamos-87685.firebaseapp.com",
    databaseURL: "https://vamos-87685-default-rtdb.firebaseio.com",
    projectId: "vamos-87685",
    storageBucket: "vamos-87685.appspot.com",
    messagingSenderId: "176469612250",
    appId: "1:176469612250:web:6d8383e02c13fe566b77e3"
  };
  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}