var randomNumber;
window.onload = function()
{
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    randomNumber = getRandomInt(2);
    console.log(randomNumber);
    document.getElementById('btnCheck').addEventListener('click', checkGuess);
}
function checkGuess(e){
    var userGuess = document.getElementById('guess').value;
    if(userGuess == randomNumber)
    {
        document.getElementById('wl').innerHTML = "Won";
        document.getElementById('result').innerHTML = "<h1>Won</h1>";
        document.getElementById('result').style.color = "green";
        document.getElementById('heading').innerHTML = "Congratulations!";
        document.getElementById('foot').innerHTML = "<h6></h6>";
        var y = document.getElementById('card');
        y.style.display = "block";  
    }
    else
    {
        document.getElementById('wl').innerHTML = "Loss";
        document.getElementById('result').innerHTML = "<h1>Loss</h1>";
        document.getElementById('result').style.color = "tomato";
        document.getElementById('heading').innerHTML = "Oh ! No";
        var x = document.getElementById('card');
        x.style.display = "block";  
    }
}

