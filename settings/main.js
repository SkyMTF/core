window.onload = function() {
    console.log(Notification.permission)
    LoadSettings()
    //set up variable for toggler since it's used pretty often here
    var notifcationcheck = document.querySelector("input[name=notifcations-toggler]")
    //Checks if notifcations are enabled in the browser or not and checks the box accordly 
    document.getElementById('exit-button').onclick = function() {settingssaver()};
    if (Notification.permission === "granted") {
       notifcationcheck.checked = true
    }
    else {
        notifcationcheck.checked = false
    }
    notifcationcheck.addEventListener('change', function(){
        console.log('the box has been checked')
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission !== "granted") {
                    notifcationcheck.checked = false
                }
                if (permission === "granted") {
                    notifcationcheck.checked = true
                }
            })
        }
        if(Notification.permission === "denied") {
            window.alert('You have denied permissions, Please reset your permissions and try again')
            notifcationcheck.checked = false
        }
    })
}

function settingssaver() {
    
    
}
function LoadSettings() {

}
function testfunction() {
    window.alert("This is WIP, lol")


}
function notifcationcheck() {}
function SendTestNotifcation() {
    const Notification = new Notification("Test", {
        body: "Test"
    })
    
}