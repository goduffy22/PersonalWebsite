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
        }
        );

});





