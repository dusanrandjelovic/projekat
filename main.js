function navigacija() {
    var meni = document.getElementById("myTopnav");
    if (meni.className === "topnav") {
        meni.className += " responsive";
    } else {
        meni.className = "topnav";
    }
}

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("header").addClass("active");
            $("header").removeClass("inactive");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("header").removeClass("active");
           $("header").addClass("inactive");
        }
    });
});
