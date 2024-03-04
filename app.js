/* Smooth scroll */

$("[data-scroll]").on("click", function(event){
    event.preventDefault();
    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;//Значение, где находится от топа нужный слайд
        // $("#nav a").removeClass("active");
        // $this.addClass("active");
        $("html, body").animate({
            scrollTop: blockOffset
        }, 700)
        console.log(blockOffset)
    // $(blockId)
});

// Menu nav toggle

$("#nav_toggle").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("nav").toggleClass("active");
});