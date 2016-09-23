$(function () {
    $(".box").hover(function () {
        if ($(this).is(".box:last")) {
            $(".box").first().css("background-color", "red");
        }
        $(this).prev(".box").css("background-color", "red");
    }, function () {
        if ($(this).is(".box:last")) {
            $(".box").first().css("background-color", "white");
        }
        $(this).prev(".box").css("background-color", "white");
    });

    // Change background of box nth follow input text
    $("#input").keyup(function () {
        var n = eval($("#input").val());
        $(".box").css("background-color", "white");
        $(".box:nth-child(" + n + ")").css("background-color", "red");
    });
});