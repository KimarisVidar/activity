(function($) { 
	var defaluts = { 
		large_elem: "large_elem", 
		small_elem: "small_elem", 
		left_btn: "left_btn", 
		right_btn: "right_btn", 
		state: "on", 
		speed: "normal", 
		vis: 6
	};
    
    $.fn.extend({ "thumbnailImg": function(options) { 

    	var opts = $.extend({}, defaluts, options); 

    	return this.each(function() { 
    		var $this = $(this); 
    		var t = 0;
                
            $(opts.large_elem).find("ul li").eq(0).show();
                
            $(opts.small_elem).find("ul li").eq(0).addClass(opts.state); 

            var l = $(opts.small_elem).find("ul li").length; 
            var l_mean; 

            if (l < opts.vis) { 
            	l_mean = 0
            } else { 
            	l_mean = ((parseInt(l / opts.vis) - 1) * opts.vis) + (l % opts.vis) 
            } 

            var w = $(opts.small_elem).find("ul li").outerWidth(true);
                
            $(opts.small_elem).find("ul").css("width", l * w + "px");

            $(opts.small_elem).find("ul li").click(function() { 
            	$(this).addClass(opts.state).siblings().removeClass(opts.state);
                t = $(this).index();
                Img($(this).index()) 
            });

            $(opts.left_btn).click(function() { 
            	
            	var i;
                $(opts.small_elem).find("ul li").each(function(index) { 
                	
					if ($(this).hasClass(opts.state)) { 
						i = index; 
						$("figure img").attr("src", $(this).attr("data-img"));
					}
                });
                
                i--; 

                if (i < 0) { i = l - 1 } t = i;
                Img(i) 
            });

            $(opts.right_btn).click(function() { 

            	var i;
                $(opts.small_elem).find("ul li").each(function(index) { 
                	
                	if ($(this).hasClass(opts.state)) { 
                		i = index;
                		$("figure img").attr("src", $(this).attr("data-img"));
                	}
                });
             
                i++; if (i > l - 1) { i = 0 } t = i;
                Img(i) 
            });

            function Img(i) { 

            	$(opts.large_elem).find("ul li").eq(i).fadeIn().siblings().hide();

                $(opts.small_elem).find("ul li").eq(i).addClass(opts.state).siblings().removeClass(opts.state); 
            
            	var ml = i * w; 
            	if (ml <= l_mean * w) { 
            		$(opts.small_elem).find("ul").stop().animate({ 
            			marginLeft: -ml + "px" 
            		}, opts.speed) 
            	} else { 
            		$(opts.small_elem).find("ul").stop().animate({ 
            			marginLeft: -(l_mean * w) + "px" 
            		}, opts.speed) 
            	} 
            } 

                // var timing = setInterval(function() { 
                // 	t++; if (t > l - 1) { t = 0 } Img(t) 
                // }, 9000);
                
                // $this.hover(function() { 
                // 	clearInterval(timing) 
                // }, function() { 
                // 	timing = setInterval(function() {
                // 		t++; if (t > l - 1) { 
                // 			t = 0 
                // 		} 
                // 		Img(t) 
                // 	}, 9000) 
               	// }) 
            }) 
		} 
	}) 
})
(jQuery);