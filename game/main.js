window.onload = function() {
    var charcters = JSON.parse(localStorage.getItem('activecharcter'));
    document.getElementById('game-text').innerHTML = "Hello" + charcters.name << " are you read to go on a jouney"
    
    

}