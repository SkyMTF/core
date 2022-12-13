window.onload = function() {
    importcharcters();
}
function importcharcters() {
    if (JSON.parse(localStorage.getItem('charcters')) === null) {
        console.log('no saves loaded!');
        return;
    }
    //Creates Variables for save box eleemnt 
    var charcters = JSON.parse(localStorage.getItem('charcters'))
    for (let i = 0; i < charcters.length; i++){
        let main_menu_buttons = document.querySelector('#main-menu-buttons');
        console.log('in loop');
        let a_element = document.createElement('a');
        var div_element = document.createElement('div');
        var inner_div_elemen = document.createElement('div');
        var span_element = document.createElement('span');
        a_element.setAttribute('href', '#');
        a_element.setAttribute('id', charcters[i].idnumbers);
        div_element.classList.add('charcter-container');
        span_element.innerText = charcters[i].name + " Level: " + charcters[i].level;
        a_element.appendChild(div_element);
        div_element.appendChild(inner_div_elemen);
        inner_div_elemen.appendChild(span_element);
        document.body.insertBefore(a_element, main_menu_buttons);       
    }
    //Create onclick listeners 
    for (let i = 0; i < charcters.length; i++){
            console.log('in event lister')
            var charcters = JSON.parse(localStorage.getItem('charcters'));
            var idnumers = charcters[i].idnumbers;
        document.getElementById(charcters[i].idnumbers).addEventListener("click", function(){SetCharcter(idnumers, charcters)})
        console.log('all done')
    } 
}
function SetCharcter() {
    console.log('in setting function now!')
    var charcters = arguments[1];
    var idnumber = arguments[0];
    console.log(charcters.length)
    for (let i = 0; i < charcters.length; i++) {
        
        if (charcters[i].idnumbers == idnumber) {
            let activecharcter = charcters[i];
            localStorage.setItem('activecharcter', JSON.stringify(activecharcter));
            window.alert("You have now selected " + activecharcter.name + " as your charcter");
            location.href = "../index.html"
        }
    }
}