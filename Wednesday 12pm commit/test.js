total = document.getElementsByClassName("progress")

function progress(count, num){
    let progressbar = document.getElementById("completion" + count);
    let width = 0
    let timer = setInterval(frame, 10);
    function frame(){
        if (width >= num){
            clearInterval(timer);
        } else {
            width ++;
            progressbar.style.width = width + '%';
            progressbar.innerHTML = width + '%';
        }

    }
}
window.onload = function progressbarload(){
    progress(1, 50);
    progress(2, 80);
    progress(3, 35);
}

function weeklychart () {

/*  WEEKLY DATA POINTS BUILDER

        days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ]
        data = [1,4,7,8,3,2,3]

        dp = [0,0,0,0,0,0,0]

        for (i = 0; i < 7; i ++){
            dp[i] = {};
            dp[i].label = days[i];
            dp[i].y = data[i]
        }

*/


var chart = new CanvasJS.Chart("chartContainer", {
animationEnabled: true,
theme: "light2", // "light1", "light2", "dark1", "dark2"
title: {
    text: "Weekly Progress"
},
axisY: {
    title: "Time",
    suffix: " hours",
    includeZero: false
},
axisX: {
    title: "Day of the Week"
},
data: [{
    type: "column",
    yValueFormatString: "#,##0.0#",
    dataPoints: [
        { label: "Monday", y: 1 },
        { label: "Tuesday", y: 1 },
        { label: "Wednesday", y: 2.5 },
        { label: "Thursday", y: 2 },
        { label: "Friday", y: 1.5 },
        { label: "Saturday", y: 0.5 },
        { label: "Sunday", y: 1.5 },
    ]
}]
});
chart.render();
}


function monthlychart(){
/* MONTHLY DATA POINTS CODE BUILDING

    months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    data = [1,4,7,8,3,2,3,68,0,5,2,6]

    dp = []

    for (i = 0; i < 4; i ++){
        dp[i] = {};
        dp[i].label = months[i];
        dp[i].y = data[i]
    }
*/
    var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
        text: "Monthly Progress"
    },
    axisY: {
        title: "Time",
        suffix: " hours",
        includeZero: false
    },
    axisX: {
        title: "Monthly progress"
    },
    data: [{
        type: "column",
        yValueFormatString: "#,##0.0#",
        dataPoints: [
            { label: "January", y: 18 },
            { label: "February", y: 17 },
            { label: "March", y: 29 },
            { label: "April", y: 32 },
            { label: "May", y: 25 },
            { label: "June", y: 22 },
            { label: "July", y: 19 },
            { label: "August", y: 20 },
            { label: "September", y: 17 },
            { label: "October", y: 12 },
            { label: "November", y: 34 },
            { label: "December", y: 31 },
        ]
    }]
    });
    chart.render();
    }
