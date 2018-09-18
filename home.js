$(document).ready(function () {

    $("#countVisits").click(function () {

        var count = parseInt($(".badge").text());
        count++;
        $(".badge").text(count);


    });

    $('body').scrollspy({target: "#myNavBar", offset: 50});


    $("#sectionHome a").on('click', function (event) {

        var hash = this.hash;
        if (hash !== "") {

            event.preventDefault();

            $("html, body").animate(
                {scrollTop: $(this.hash).offset().top},
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    $("#myNavBar a").on('click', function (event) {

        var hash = this.hash;
        if (hash !== "") {

            event.preventDefault();

            $("html, body").animate(
                {scrollTop: $(this.hash).offset().top},
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    $("#navbar-list .nav-item .nav-link").hover(
        function(){
        $(this).addClass("badge-pill badge-primary");
    },
        function(){
            $(this).removeClass("badge-pill badge-primary");
        });

});



function on(event){ //Need to generalise for all card overlay couples.
    const source = event.srcElement;
    const overlay = source.lastElementChild;
    overlay.style.visibility = "visible";
    overlay.style.width = "100%";
    return overlay;
}

function off(){
    const overlay = document.getElementById("overlay");

        overlay.style.width = "0%";
        overlay.style.visibility = "hidden";
}

document.getElementById("card1").addEventListener("mouseover", function(){

});







