
const firebaseConfig = {
  apiKey: "AIzaSyCKD6ARh0R8QS8mMrXaLD0NAX_xcdnj-9A",
  authDomain: "fitiot.firebaseapp.com",
  databaseURL: "https://fitiot-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitiot",
  storageBucket: "fitiot.appspot.com",
  messagingSenderId: "347250681006",
  appId: "1:347250681006:web:bf299e201148ce5730f93f",
  measurementId: "G-M82DR203LL"
};

firebase.initializeApp(firebaseConfig);



let blindsStatus;
let db = firebase.database().ref("Blinds");
db.on("value", (status) => {
  blindsStatus = status.val().status;
  if (blindsStatus == CLOSE_BLINDS) {
    closeBlinds();
  } else if (blindsStatus == OPEN_BLINDS) {
    openBlinds();
  }
});

sendData = (command) => {
  console.log(command);
  db.set(
    {
      status: command,
    },
    (error) => {
      if (error) {
        console.log("Greska u snimanju podataka!");
      } else {
        console.log("Uspjesno snimljeni podaci!");
      }
    }
  );
};

let OPEN_BLINDS=true;
let CLOSE_BLINDS=false;

document.getElementById('CloseBtn').onclick = function(event){
  sendData(CLOSE_BLINDS);
}
    

 
document.getElementById('OpenBtn').onclick=function(event){
  sendData(OPEN_BLINDS);
}
  
function closeBlinds() {
    OpenBtn.style.display = "block";
    CloseBtn.style.display = "none";
    document.getElementById('slika2').style.visibility ="hidden";
    document.getElementById('slika1').style.visibility="visible";
    sendData(CLOSE_BLINDS);
  }
  function openBlinds() {
    OpenBtn.style.display = "none";
    CloseBtn.style.display = "block";
    document.getElementById('slika2').style.visibility ="visible";
    document.getElementById('slika1').style.visibility="hidden";
    sendData(OPEN_BLINDS);
  }









  
