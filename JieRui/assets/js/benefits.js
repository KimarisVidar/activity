function Slide1(){
    var dir = -1, // 水平捲動方向：-1表示向左；1表示向右
        interval = 4000,
        duration = 500,
        timer;
    $("#slide1 ul").prepend($("#slide1 li:last-child"));
    $("#slide1 ul").css("left", -400);
    timer = setInterval(slideTimer, interval);
    function slideTimer(){
        if(dir == -1){
            $("#slide1 ul").animate({"left" : "-=400px" }, duration).append($("#slide1 li:first-child")).css("left", -400);
        }else{
            $("#slide1 ul").animate({"left" : "+=400px" }, duration).prepend($("#slide1 li:last-child")).css("left", -400);
            dir = -1;
        }
    }
    $(".btnPrev").click(function(){
        dir = 1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    });
    $(".btnNext").click(function(){
        dir = -1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    });    
}

function Slide2(){
    var dir = -1, // 水平捲動方向：-1表示向左；1表示向右
        interval = 4000,
        duration = 500,
        timer;
    $("#slide2 ul").prepend($("#slide2 li:last-child"));
    $("#slide2 ul").css("left", -400);
    timer = setInterval(slideTimer, interval);
    function slideTimer(){
        if(dir == -1){
            $("#slide2 ul").animate({"left" : "-=400px" }, duration).append($("#slide2 li:first-child")).css("left", -400);
        }else{
            $("#slide2 ul").animate({"left" : "+=400px" }, duration).prepend($("#slide2 li:last-child")).css("left", -400);
            dir = -1;
        }
    }
    $(".btnPrev").click(function(){
        dir = 1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    });
    $(".btnNext").click(function(){
        dir = -1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    });
}

function Slide3(){
    var dir = -1, // 水平捲動方向：-1表示向左；1表示向右
        interval = 4000,
        duration = 500,
        timer;
    $("#slide3 ul").prepend($("#slide3 li:last-child"));
    $("#slide3 ul").css("left", -400);
    timer = setInterval(slideTimer, interval);
    function slideTimer(){
        if(dir == -1){
            $("#slide3 ul").animate({"left" : "-=400px" }, duration).append($("#slide3 li:first-child")).css("left", -400);
        }else{
            $("#slide3 ul").animate({"left" : "+=400px" }, duration).prepend($("#slide3 li:last-child")).css("left", -400);
            dir = -1;
        }
    }
    $(".btnPrev").click(function(){
        dir = 1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    });
    $(".btnNext").click(function(){
        dir = -1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    });
}

function Slide4(){
    var dir = -1, // 水平捲動方向：-1表示向左；1表示向右
        interval = 4000,
        duration = 500,
        timer;
    $("#slide4 ul").prepend($("#slide4 li:last-child"));
    $("#slide4 ul").css("left", -400);
    timer = setInterval(slideTimer, interval);
    function slideTimer(){
        if(dir == -1){
            $("#slide4 ul").animate({"left" : "-=400px" }, duration).append($("#slide4 li:first-child")).css("left", -400);
        }else{
            $("#slide4 ul").animate({"left" : "+=400px" }, duration).prepend($("#slide4 li:last-child")).css("left", -400);
            dir = -1;
        }
    }
    $(".btnPrev").click(function(){
        dir = 1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    });
    $(".btnNext").click(function(){
        dir = -1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    });
}

function Slide5(){
    var dir = -1, // 水平捲動方向：-1表示向左；1表示向右
        interval = 4000,
        duration = 500,
        timer;
    $("#slide5 ul").prepend($("#slide5 li:last-child"));
    $("#slide5 ul").css("left", -400);
    timer = setInterval(slideTimer, interval);
    function slideTimer(){
        if(dir == -1){
            $("#slide5 ul").animate({"left" : "-=400px" }, duration).append($("#slide5 li:first-child")).css("left", -400);
        }else{
            $("#slide5 ul").animate({"left" : "+=400px" }, duration).prepend($("#slide5 li:last-child")).css("left", -400);
            dir = -1;
        }
    }
    $(".btnPrev").click(function(){
        dir = 1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    });
    $(".btnNext").click(function(){
        dir = -1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    });
}