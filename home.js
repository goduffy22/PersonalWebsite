$(function(){
    $("#countVisits").click(function(){

        var count = parseInt($(".badge").text());
        count++;
        $(".badge").text(count);
    });

    $("#navbarSupportedContent a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
               scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = "#" + hash;
            });
        }
        $("title").text(hash);

    });
});