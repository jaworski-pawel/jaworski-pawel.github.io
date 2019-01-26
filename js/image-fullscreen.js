$('#Fullscreen').css('height', $(document).outerWidth() + 'px');

$('.myImg').click(function () {
    var src = $(this).attr('src'); 
    $('#Fullscreen img').attr('src', src); 
    $('#Fullscreen').fadeIn();
});
$('#Fullscreen').click(function () {
    $(this).fadeOut();
});