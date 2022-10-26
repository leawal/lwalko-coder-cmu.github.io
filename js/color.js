window.addEventListener('load', function(){
    var firstClick = true;
    var colorBtn = document.getElementById("colorBtn");
    colorBtn.addEventListener("click",function(){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("color").style.backgroundColor = "#" + randomColor;
        if(firstClick) {
            setInterval(function() {
                randomColor = Math.floor(Math.random()*16777215).toString(16);
                document.getElementById("color").style.backgroundColor = "#" + randomColor;
            }, 3000);
            firstClick = false;
        } 
    });
});