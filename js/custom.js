$(document).ready(function(e){
	
	
		
          $.scrollify({
            section : ".scroll_check",
            setHeights: false,
            offset:-126,
            interstitialSection :".header",

          });


        $(".secondary_menu li a").click(function(){
        	var id_value = $(this).attr("href");
        	$(".secondary_menu li a").removeClass("active");
        	$(this).addClass("active");
        	$.scrollify.enable();
        	$("html,body").animate({
        		scrollTop:$("#id_value").offset().top-126	
        	},400)
        })
        

})