window.onload = function() {
    //Creates Variables we will use later
    var skills = document.querySelector("#Start-Skill-Point");
    var luckskill = document.querySelector('#luck-skill');
    var speechskill = document.querySelector('#speech-skill');
    var strengthskill = document.querySelector('#strength-skill');
    var intelligenceskill = document.querySelector('#intelligence-skill');
    var createbutton = document.querySelector('#create-button');
    createbutton.onclick = function() {charctersave()};
    //set default number of skill points 
    skills.innerText = 15;
    var skillnumber = 15;
    //Creates Event Listeners 
    luckskill.addEventListener('change', function() {
        console.log('event was triggered');
        reload();
    });
    speechskill.addEventListener('change', function() {
        reload();
    });
    strengthskill.addEventListener('change', function() {
        reload();
    });
    intelligenceskill.addEventListener('change',function() {
        reload();
    });
}
//Calculates what should be displayed in the skill meter
function reload() {
    var luckskill = document.querySelector('#luck-skill').value;
    var speechskill = document.querySelector('#speech-skill').value;
    var strengthskill = document.querySelector('#strength-skill').value;
    var intelligenceskill = document.querySelector('#intelligence-skill').value;
    var skills = document.querySelector('#Start-Skill-Point');    
    var inputs = document.querySelector("#input-selector");
    skills.innerText =  15 - luckskill - speechskill - strengthskill - intelligenceskill;
    if (skills.innerText === "0") {
        document.querySelector('#luck-skill').classList.add("disabled");
        document.querySelector('#speech-skill').classList.add('disabled');
        document.querySelector('#strength-skill').classList.add('disabled');
        document.querySelector('#intelligence-skill').classList.add('disabled');
    }
}
function charctersave() {
    var skillnumber = document.querySelector('#Start-Skill-Point'); 
    if (skillnumber.innerText !== "0") {
        window.alert("Please Select more skills");
        return;
    }
    if (skillnumber.innerText < 0){
        window.alert("You have entered an invalid number for 1 or more skills, please try again!");
        return;
    }
    if (JSON.parse(localStorage.getItem('charcters')) === null) {
        console.log('debug function');
        var charcters = [];
    } 
    else {
        var charcters = JSON.parse(localStorage.getItem('charcters'));
        console.log('debug')
    }
    var charctername = document.querySelector('#character-name').value;
    var luckskill = document.querySelector('#luck-skill').value;
    var speechskill = document.querySelector('#speech-skill').value;
    var strengthskill = document.querySelector('#strength-skill').value;
    var intelligenceskill = document.querySelector('#intelligence-skill').value;
    var level = 0;
    var idnumber = Math.floor(Math.random() * 100) + 1;
    var locationmap = null;
    charcters.push({name: charctername, 
        luckskills: luckskill, 
        speechskills: speechskill, 
        strengthskills: strengthskill, 
        intelligenceskills: intelligenceskill, 
        location: locationmap,
        idnumbers: idnumber,
        level: level
    });
    localStorage.setItem('charcters', JSON.stringify(charcters));
    location.href = 'charcter-select.html';
    

}