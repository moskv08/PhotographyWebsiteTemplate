// Animated smooth scroll

// run function when button was clicked
$('#view-work').on('click', function () {
    // Get image position
    const images = $('#images').position().top;

    // Animation
    $('html, body').animate({
        scrollTop: images
    }, 900);
})