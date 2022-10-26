window.addEventListener('load', function(){
    // grabs all of the astronomical object cards
    var astros = document.getElementsByClassName('astro_object');

    // cycles through all of the cards
    for(let i = 0; i < astros.length; i++) {

        // when it is moused over, text goes away, image appears
        astros[i].addEventListener("mouseover", function(){
            var image = astros[i].getElementsByTagName('img')[0];
            var text = astros[i].getElementsByTagName('h3')[0];
            image.style.display = 'block';
            text.style.display = 'none';
        });

        // when the mouse leaves, text pops up again, image goes away again
        astros[i].addEventListener("mouseleave", function(){
            var text = astros[i].getElementsByTagName('h3')[0];
            var image = astros[i].getElementsByTagName('img')[0];
            image.style.display = 'none';
            text.style.display = 'block';
        });
    }
});