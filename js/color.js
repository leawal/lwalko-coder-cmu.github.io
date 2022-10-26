window.addEventListener('load', function(){
    // to ensure that an Interval is not set everything single button click (only the first)
    var firstClick = true;

    // get the button that when clicked changes the color of the card
    var colorBtn = document.getElementById("colorBtn");

    // when the button is clicked, gets a random color
    colorBtn.addEventListener("click",function(){

        // just generates a random number following the typical # color format and changes that color
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("color").style.backgroundColor = "#" + randomColor;

        // if it is the first click, then it sets up an interval to change the color after 3 seconds
        if(firstClick) {
            setInterval(function() {
                randomColor = Math.floor(Math.random()*16777215).toString(16);
                document.getElementById("color").style.backgroundColor = "#" + randomColor;
            }, 3000);

            // sets the boolean to false so that it doesn't set up a duplicate interval
            firstClick = false;
        } 
    });
});