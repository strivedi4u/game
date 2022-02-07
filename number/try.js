
var randomNumber;
window.onload = function()
{
    randomNumber = Math.floor((Math.random()* 10 ) +1);
    console.log(randomNumber);
    document.getElementById('btnCheck').addEventListener('click', checkGuess);
}
function checkGuess(e){
    var userGuess = document.getElementById('guess').value;
    if(userGuess == randomNumber)
    {
        document.getElementById('result').innerHTML = "<h1>Correct</h1>";
        document.getElementById('result').style.color = "green";
        document.getElementById('heading').innerHTML = "Congratulations!";
        document.getElementById('foot').innerHTML = "<h6></h6>";
        var y = document.getElementById('card');
        y.style.display = "block";  
    }
    else
    {
        document.getElementById('result').innerHTML = "<h1>Wrong</h1>";
        document.getElementById('result').style.color = "tomato";
        document.getElementById('heading').innerHTML = "Oh ! No";
        document.getElementById('foot').innerHTML = "<h6>Please! Try again</h6>";
        var x = document.getElementById('card');
        x.style.display = "block";  
    }
}

