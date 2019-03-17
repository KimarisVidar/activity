// window.load
$(window).load(function() {
	
	//preload 效果 
    $(".preloader").fadeOut("slow", function(){
      	$(".preloader-left").addClass("slide-left");
      	$(".preloader-right").addClass("slide-right");
    });
    
});

// dom-ready
$(function(){
	// yes 預設 active
	$('.link-yes').addClass('active');

	// 切換yes ,no區塊
	$('.link-yes').on('click',function(){
		$('.link-no').removeClass('active');
		$(this).addClass('active');
		$('.no-block').hide(100);
		$('.yes-block').slideDown(800);
	})

	$('.link-no').on('click',function(){
		$('.link-yes').removeClass('active');
		$(this).addClass('active');
		$('.yes-block').hide(100);
		$('.no-block').slideDown(800);
	})

	// 捲動控制
	var b4_h = $('.b4').offset().top;
	$('.b2-no-link').click(function(e){
		e.preventDefault();
		$('html ,body').animate({scrollTop: b4_h},500);
	})

})