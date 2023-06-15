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

function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "chat_room.html";
  }



