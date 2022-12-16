$(document).ready(function() {

  $("#wrap").append("<div id='mobile-menu-list'>"+$("#menu").html()+"</div>");

  $(".menuNav").append("<button id='mobile-menu'>Menu</button>");

  $("#mobile-menu").bind( "click", function() {

    if($("#mobile-menu-list").css("display")!="block"){

          $("#mobile-menu-list").css("display","block");
          //$("#mobile-menu-list").css("opacity",0);

          $("#mobile-menu-list").width($(window).width());


          var offset = $(this).offset();
          var heightOffset = offset.top + ($(".menuNav").height());


          $("#mobile-menu-list").css("top", heightOffset+"px");
          $("#mobile-menu-list").height($(window).height()-heightOffset);


    } else {

      $("#mobile-menu-list").css("display","none");


    }




  });


});
