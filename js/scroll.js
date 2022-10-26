window.addEventListener('load', function(){
    // Get the button
    let topBtn = document.getElementById("backToTop");

    // When the user scrolls down halfway down from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    // this causes the button to pop up if it is over halfway there (due to math)
    function scrollFunction() {
        if (document.documentElement.scrollTop / document.documentElement.scrollHeight > 0.5) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    topBtn.addEventListener('click', function(){
        document.documentElement.scrollTop = 0;
    });
});
    