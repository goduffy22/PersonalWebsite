$(function () {

    $("#countVisits").click(function () {

        var count = parseInt($(".badge").text());
        count++;
        $(".badge").text(count);


    });



});