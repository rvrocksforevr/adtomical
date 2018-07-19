$(document).ready(function(e){
	
	
		
          /*$.scrollify({
            section : ".scroll_check",
            setHeights: false,
            offset:-126,
            interstitialSection :".header",

          });

*/
        var previous_scroll = $(window).scrollTop();
        var new_scroll=0;


        $(window).scroll(function(e){

            new_scroll = $(window).scrollTop();
            var active_content = $(".scroll_check.active");
            setTimeout(function(){
                if((previous_scroll + 5) < new_scroll )
                {

                    $(".scroll_check.active").next().addClass("active");
                    return;
                }    
            },300);
            
        })





        $(".secondary_menu li a").click(function(){

            $(".left_sidebar_container .arrow_down").removeClass("slide");
        	var id_value = $(this).attr("href");
        	$(".secondary_menu li a").removeClass("active");
        	$(this).addClass("active");
        	//$.scrollify.enable();
            if($(window).width()>767)
            {
                $("html,body").animate({
                    scrollTop:$(id_value).offset().top-80   
                },400)    
            }
            else
            {
                $("html,body").animate({
                    scrollTop:$(id_value).offset().top-50   
                },400)       
            }
        	
        })

        $(".secondary_menu li:last-child a").click(function(){
            $(".left_sidebar_container .arrow_down").addClass("slide");
        })


        /*var myFullpage = new fullpage('#main_container', {
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['what_section', 'how_section', 'initiate_section'],
        menu: '#secondary_menu',

        //equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
    });

        $('#fullpage').fullpage({
            //options here
            autoScrolling:true,
            scrollHorizontally: true,
            anchors: ['what_section', 'how_section', 'initiate_section'],
            menu: '#secondary_menu',

        });
*/

})