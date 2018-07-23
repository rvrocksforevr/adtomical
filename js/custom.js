$(document).ready(function(e){
	
    var counter = 1;
	$(".fp-left ul li").each(function(key,index){
        $(".fp-left ul li:nth-child("+[key+1]+") a span").append("0"+counter);
        counter++;

        var tooltip = $(".fp-left ul li:nth-child("+[key+1]+") .fp-tooltip").html();
        //console.log(tooltip);

        $(".fp-left ul li:nth-child("+[key+1]+") a").append("<span class='tooltip_data'>"+tooltip+"</span>");

        if($(".fp-left ul li:nth-child("+[key+1]+")").children("a").hasClass("active"))
        {
            $(this).addClass("active");
        }
    })



    var arrow_html = "<a class='arrow_down' ><img src='images/arrow.png' /></a>";
    $("#fp-nav ul").append(arrow_html);

		
    $("#fp-nav li:nth-last-child(1) a").click(function(){
        //alert(0);
        $("#fp-nav .arrow_down").addClass("slide");
        debugger;
    })


    setInterval(function()
    {
        if($("#fp-nav ul li.value_2 a").hasClass("active"))
        {
            $("#fp-nav ul .arrow_down").addClass("slide");   
        }
        else
        {
            $("#fp-nav ul .arrow_down").removeClass("slide");      
        }
    },300);


    $("#fp-nav ul li a").click(function(){

        //alert(0);
        if($("#fp-nav ul li.value_2 a").hasClass("active"))
        {
            $("#fp-nav ul .arrow_down").addClass("slide");   
        }
        else
        {
            $("#fp-nav ul .arrow_down").removeClass("slide");      
        }
    
    })
    

})
