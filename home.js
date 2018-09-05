$(document).ready(function () {

    $("#countVisits").click(function () {

        var count = parseInt($(".badge").text());
        count++;
        $(".badge").text(count);


    });

    $('body').scrollspy({target: "#myNavBar", offset: 50});


    $("#myNavBar a").on('click', function(event) {

            var hash = this.hash;
            if (hash !== "") {

                event.preventDefault();

                $("html, body").animate(
                    {scrollTop: $(this.hash).offset().top},
                    800,
                    function(){
                        window.location.hash = hash;
                    }
                );
            }
    });

    $("#animate-test").on("click", function(){

        $(this).animate(
            {margin: "10px"}
        );
        alert("test");
    });

});

