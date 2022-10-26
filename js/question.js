window.addEventListener('load', function(){
    // grabs the question card on which it says When is it?
    var question = document.getElementById("question");

    // mouseover makes it visible (it was previously invisible)
    // unlike display style designs, it actually occupies space despite it all
    question.addEventListener("mouseover",function(){
        document.getElementById("answer").style.visibility = 'visible';
    });

    // mouseout makes it invisible again
    question.addEventListener("mouseout",function(){
        document.getElementById("answer").style.visibility = 'hidden';
    });
});