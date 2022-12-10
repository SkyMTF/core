window.onload = function() {
    var notifcationcheck = document.querySelector("input[name=notifcations-toggler]");
    LoadSettings();
    //set up variable for toggler since it's used pretty often here
    //Checks if notifcations are enabled in the browser or not and checks the box accordly 
    document.getElementById('exit-button').onclick = function() {settingssaver()};
    notifcationcheck.addEventListener('change', function(){
        console.log('the box has been checked');
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission !== "granted") {
                    notifcationcheck.checked = false;
                }
                else {
                    console.log('else was ran');
                }
                if (permission === "granted") {
                    notifcationcheck.checked = true;
                }
            })
        }
        if(Notification.permission === "denied") {
            window.alert('You have denied permissions, Please reset your permissions and try again');
            notifcationcheck.checked = false;
        }
        
    })
}
//Saves Settings to Local Storage
function settingssaver() {

    var NotificationOn = new Boolean(false);
    var soundOn = new Boolean(false);
    var textspeed = document.getElementById('textspeed').value; 
    if (document.getElementById('notifcations-toggler').checked === true) {
        NotificationOn = Boolean(true);
    }
    else {
        NotificationOn = Boolean(false);
    }
    if (document.getElementById('sounds').checked === true) {
        soundOn = Boolean(true);
    }
    else {
        soundOn = Boolean(false);
    }
    localStorage.setItem('settings', JSON.stringify({notifcationstatus: NotificationOn, soundstatus: soundOn, speedtext: textspeed}));
    location.href = "../index.html";



    
    
}
//Loads Settings from Local Storage
function LoadSettings() {
    const settings = JSON.parse(localStorage.getItem('settings'));
    var sounds = document.getElementById('sounds');
    var textspeed = document.getElementById('textspeed');
    var notifcationcheck = document.getElementById('notifcations-toggler');
    if (Notification.permission === "granted" && settings.notifcationstatus === true) {
        notifcationcheck.checked = true;
    }
  
    if (settings.soundstatus === true) {
        sounds.checked = true;
    }
    textspeed.value = settings.speedtext;

    


}