$(document).ready(function(){
	 $(".language").click(function(){
        $(".tabs1").css("display", "block");
    });
	 $(".header-language__name").click(function(){
        $(".tabs1").css("display", "block");
    });
	$("#len").click(function(){
        $(".tabs1").css("display", "block");
    });
	 $('html').click(function (e) {
    if (e.target.id == 'language') {
       $(".tabs1").css("display", "block");
    } else {
       $(".tabs1").css("display", "none");
    }
	});
	$( ".tablinks1" ).each(function(index) {
		$(this).on("click", function(){
			x = $(this).text();
			$("#len").html(x);
		});	
	}); 
	/*$(".tablinks1").click(function(){
        x = $(this).text();
			$("#len").html(x);
    });*/
	/*document.getElementById('abs-img').addEventListener("mouseover",hoverChange);
	function hoverChange() {
		var y = document.querySelector('.abs-a'), ':after';
		y.style.display = "block";
	}*/
	/*$(".abs-a").hover(function(){
		$(".abs-a:after").css("display", "block");	
	});	
	$( ".abs-a" ).mouseenter(function() {
		$( ".abs-a:after" ).css( "display", "block" );
	});*/
	/*$(".abs-a").mouseenter(function() {
		$(".abs-div").css("display", "inline");
	}).mouseleave(function(){
		$(".abs-div").css("display", "none");
	});
	$( "#abs-img" ).mouseover(function() {
		$( "#hide-text" ).css( "display", " inline" );
	}).mouseout(function(){
		$( "#hide-text" ).css( "display", "none" );
	});
		$( "a-show" ).click(function() {
		$( ".big-img" ).css( "display", "none" );
	
	/*$( ".google-bnt" ).append( " <div class="img-marketing"><img class="big-img" src=""><div class="up-right"><img id="abs-img" alt="" src="img/iconx2-000000.png"><a href="#" class="close"></div></div>" );*/
	 $( ".abs-a" ).mouseenter(function() {
		$( ".abs-div" ).css( "display", "inline-block" );
	}).mouseout(function(){
		$( ".abs-div" ).css( "display", "none" );
	})
	 $( ".abcd" ).mouseenter(function() {
		$( ".abc-div" ).css( "display", "inline-block" );
	}).mouseout(function(){
		$( ".abc-div" ).css( "display", "none" );
	})
	$(".a-hide").click(function() {
		$(".big-img").css("display", "none");
		$(".up-right").css("display", "none");
		$("#google-content").css("display", "block");
		$(".img-content").css("margin-top", "27px");
	});
	 $( ".abs-a" ).mouseenter(function() {
		$( ".abs-span" ).css( "display", "inline-block" );
	}).mouseout(function(){
		$( ".abs-span" ).css( "display", "none" );
	})
	$(".a-li-mid").click(function() {
			$(".hide-nike").css("display","block");
			$(".a-li-mid").css("display","none");
			$(".sort-span").css("margin-right","60px");	
	})
	$(".b").click(function() {
			$("#tacnost-nova").css("display","inline-block");
			$("#tacnost-stara").css("display","none");
			x=$(".b").text();
			$(".new").html(x);
			$(".a-li-mid").css("display","inline-block");
			$(".sort-span").css("margin-right","60px");
			$(".hide-nike").css("display","none");	
	})
	$(".a").click(function() {
			$("#tacnost-stara").css("display","inline-block");
			$("#tacnost-nova").css("display","none");
			x=$(".a").text();
			$(".new").html(x);
			$(".a-li-mid").css("display","inline-block");
			$(".sort-span").css("margin-right","60px");
			$(".hide-nike").css("display","none");	
	})
	$( ".age-li" ).each(function(index) {
		$(this).on("click", function(){
			x = $(this).text();
			$(".new").html(x);
		});	
	}); 
	$("#x-files").click(function(){
	$("#prekrivac").css("display","none");
	$("#nevidljiv").css("opacity","1");
	$("#x-files").css("display","none");
	})
	$(".checkbox").one( "click", function(){
		$( "<p class='p-float-chek'>Write 6 more characters to post to Facebook</p>" ).insertAfter( ".logp" );
		$("#x-files").css("margin-bottom","25px");
		$(".empty").css("display","none");
		$("#hidden-checked").css("display","inline-block");
	})
	
	
/*$(".new").click(function() {
		 $(".span-border").html('<div class="old-div"><img alt="" id="tacnost" src="img/stikla.png"><span class="a">Newest</span></div><div class="new-div"><span class="b">Oldest</span></div>');
		$(".span-border").css({"background-color": "white","border": "1px solid", "padding": "8px"});
	});   
	$(".b").click(function() {
		$(".old-div").html('<div class="old-div"><span class="a">Newest</span></div>');
		$(".new-div").html('<div class="new-div"><img alt="" id="tacnost" src="img/stikla.png"><span class="b">Oldest</span></div>');
	});
	 $( ".old-div" ).mouseenter(function() {
		$(".old-div").css("background-color", "blue");
	}).mouseout(function(){
		$(".abc-div").css("background-color", "white");
	});*/
});	
	/*document.getElementById("id-hide-div").addEventListener("mouseover", mouseOver);
document.getElementById("id-hide-div").addEventListener("mouseout", mouseOut);
function mouseOver() {
    document.getElementById("closed_text").style.display = "inline";
}

function mouseOut() {
    document.getElementById("closed_text").style.display = "none";
}*/

