// FADE-IN FADE-OUT effect on scrolling

$(document).ready(function() {
    $(window).scroll(function(){
        $("section").each(function(i){
            var top_of_object = $(this).position().top ;
            var bottom_of_page = $(window).scrollTop() + $(window).height();
            if (bottom_of_page > top_of_object){
                $(this).addClass('visible');
            } else {
                $(this).removeClass('visible');
            }
        });
    });
});

// FADE-IN FADE-OUT effect on scrolling

// **Second way

// $(document).on("scroll", function () {
//     var pageTop = $(document).scrollTop()
//     var pageBottom = pageTop + $(window).height()
//     var tags = $("section")
    
//     for (var i = 0; i < tags.length; i++) {
//         var tag = tags[i]
    
//         if ($(tag).position().top < pageBottom) {
//             $(tag).addClass("visible")
//             } else {
//                 $(tag).removeClass("visible")
//             }
//     }
//   })