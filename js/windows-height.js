var windowHeight = window.innerHeight;
if(windowHeight < 1080) {
    $(".jumbotron").css("height", windowHeight);
    $(".jumbotron").css("padding-top", windowHeight/3);
}
else {
    $(".jumbotron").css("height", "1080");
}
