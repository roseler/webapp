$(document).ready(function () {

    // When the button is clicked
    $('.btn-go-top').on('click', function (e) {
        e.preventDefault();

        
        $('html, body').animate({ scrollTop: 0 }, 0);
    });

});