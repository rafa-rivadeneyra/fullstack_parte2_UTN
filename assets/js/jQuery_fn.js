$(document).ready(function() {
    // Cuando se pasa el mouse sobre la imagen
    $(".imagen_crece").hover(
        function() {
            $(this).css("transform", "scale(1.015)"); /* Agrandar la imagen al 120% */
        },
        function() {
            $(this).css("transform", "scale(1)"); /* Volver al tamaño original de la imagen */
        }
    );
});


$(document).ready(function() {
    // Manejador de evento para el desplazamiento
    $(".div-hacia-derecha").hover(function() {
        // Desplazar el div 10 píxeles a la derecha lentamente
        $(this).animate({ marginLeft: '+=10px' }, 'slow');
    },
    function(){
        $(this).animate({ marginLeft: '-=10px' }, 'slow');
    }
    
    );
});

