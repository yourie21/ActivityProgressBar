$(document).ready(function(){

    $("#detailview").hide();
    $("#overviewbutton1").hide();

    $("#weeklybutton").css("font-size","18px");
    $("#monthlybutton").css("font-size","10px");

    $("#weeklybutton").click(function(){
        weeklychart();
        $(this).css("font-size","18px");
        $("#monthlybutton").css("font-size","10px")
    });

    $("#monthlybutton").click(function(){
        monthlychart();
        $(this).css("font-size","18px");
        $("#weeklybutton").css("font-size","10px")
    });

    $("#hiderbutton1").click(function() {
        $("#goal2").slideUp();
        $("#goal3").slideUp();
        $("#detailview").show();
        $("#overviewbutton1").show();
        $(this).hide();
        weeklychart();
    })

    $("#overviewbutton1").click(function() {
        $("#goal2").slideDown();
        $("#goal3").slideDown();
        $("#detailview").hide();
        $(this).hide();
        $("#hiderbutton1").show();
    })

    $("#hiderbutton2").click(function() {
        $("#goal1").slideToggle();
        $("#goal3").slideToggle();
    })

    $("#hiderbutton3").click(function() {
        $("#goal1").slideToggle();
        $("#goal2").slideToggle();
    })


});
