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

/************   Menú sticky   ***********/

$(document).ready(function() {
    var menu = $("#menu");
    var menuOffset = menu.offset().top; // Obtener la posición superior del menú original

    // Manejar el evento de scroll
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop(); // Obtener la posición de desplazamiento actual

        // Verificar si el usuario ha desplazado más allá de la posición original del menú
        if (scrollPos >= menuOffset) {
            menu.addClass("fixed-menu"); // Aplicar clase para posición fija
        } else {
            menu.removeClass("fixed-menu"); // Quitar clase de posición fija
        }
    });
});


$(document).ready(function() {
    // Mostrar el botón de scroll cuando se desplaza hacia abajo 100 píxeles
    $(window).scroll(function() {

        if ($(this).scrollTop() > 100) {
            var scrollTop_1 = window.scrollY || document.documentElement.scrollTop;
            scrollTop_1 = scrollTop_1 - 100;
            console.log(window.scrollY, scrollTop_1);
        } else {
            
        }
    });

    // Hacer scroll hacia arriba al hacer clic en el botón
    $('.scrollMenu').click(function() {
        $('.scrollMenu').css('margin-top', '+8px');
    });
});

/************  Fin menú sticky   ***********/