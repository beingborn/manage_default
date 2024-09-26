
$(function(){fn_width();});

// WIDTH LAYOUT
function fn_width(){
	var clsArr = ['w_per', 'w_px',  'mw_',  'miw_', 'div_per', 'h_', 'ineH_', 'ml', 'ml_', 'mt', 'mt_', 'mr' , 'mr_', 'mb', 'mb_', 'pl', 'pt', 'pr', 'pb'];
	$(clsArr).each(function(idx, cls) {
		$("[class*='"+cls+"']").each(function(){
			var string = $(this).attr('class');
			var words = string.split(' ');
			function sentence(value){return value.indexOf(cls)>=0;}
			var className = words.filter(sentence).toString();
			var num = className.replace(/[^0-9]/g,"");			
			switch (cls) {
				case 'w_per'	 	: if ( className.indexOf( 'h' ) >=0 ){ $(this).css({'width':num + '.5%'}); } else { $(this).css({'width':num + '% '}); } if ( num == 333 ){ $(this).css({'width':'33.333333333' + '% '}); } break;
				case 'w_px' 	 	: $(this).css({'width':num + 'px'}); break;
				case 'mw_'  	 	: $(this).css({'max-width':num + 'px'}); break;
				case 'miw_' 	 	: $(this).css({'min-width':num + 'px'}); break;
				case 'div_per' 	 	: if ( num == 100 ){ $(this).css({'width':'100%'}); } else { $(this).css({'width':'calc(' + num + '% - 10px)'}); } break;
				case 'h_'   	 	: if ( className.indexOf( 'per' ) >=0 ){ $(this).css({'height':num + '%'}); } else { $(this).css({'height':num + 'px'}); } break;
				case 'ineH_'	 	: if ( className.indexOf( 'h' ) >=0 ){ $(this).css({'width':num + '.5px'}); } else { $(this).css({'line-height':num + 'px'}); } break;
				case 'ml'  		 	: $(this).css({'margin-left':num + 'px'}); break;
				case 'ml_'			: $(this).css({'margin-left':'-' + num + 'px'}); break;
				case 'mt'  		 	: $(this).css({'margin-top':num + 'px'}); break;
				case 'mt_'  	 	: $(this).css({'margin-top':'-' + num + 'px'}); break;
				case 'mr'  			: $(this).css({'margin-right':num + 'px'}); break;
				case 'mr_'  		: $(this).css({'margin-right':'-' + num + 'px'}); break;
				case 'mb'  		 	: $(this).css({'margin-bottom':num + 'px'}); break;
				case 'mb_'  	 	: $(this).css({'margin-bottom':'-' + num + 'px'}); break;
				case 'pd'  		 	: $(this).css({'padding':num + 'px'}); break;
				case 'pl'  		 	: $(this).css({'padding-left':num + 'px'}); break;
				case 'pt'  		 	: $(this).css({'padding-top':num + 'px'}); break;
				case 'pr'  		 	: $(this).css({'padding-right':num + 'px'}); break;
				case 'pb'  		 	: $(this).css({'padding-bottom':num + 'px'}); break;
			}
		});	
	});
}


// new header js
$(document).ready(function() {
    const gnbTop__Menu = $('#gnb1 > .top__menu > li.plus > a');
    const gnbSub__Menu = $('#gnb1 .sub__menu > ul > li > a');
    let gnbOpenMenu;
    gnbTop__Menu.click(function() {
        gnbOpenMenu = $(this).parent(); 
        const isItOpen = gnbOpenMenu.hasClass('active');
        if (isItOpen) {gnbOpenMenu.removeClass('active');$('.gnb__bg').hide()
        } else {
            gnbTop__Menu.parent().removeClass('active');
			gnbSub__Menu.parent().removeClass('active');
            gnbOpenMenu.addClass('active');
            $('.gnb__bg').show()
        }
        const firstSubMenu = gnbOpenMenu.find('.sub__menu ul li:first-child a');
        if (firstSubMenu.length > 0) {
            gnbOpenMenu.siblings().find('.sub__menu ul li').removeClass('active');
			firstSubMenu.parent().addClass('active');
        }
        });
        gnbSub__Menu.click(function() {
        const gnbOpenSub__Menu = $(this).parent();
        gnbSub__Menu.parent().removeClass('active');
        gnbOpenSub__Menu.addClass('active');
        });
        $('.gnb__bg').click(function(){
          gnbOpenMenu.removeClass('active');
		  gnbSub__Menu.parent().removeClass('active');
          $(this).hide();
        })
    });



	// 노동조합 체계 관리	
	$(document).ready(function () {
		$('.system-list .menu-head').on('click', function () {
			const currentHead = $(this)
			const currentBody = $(this).next('.menu-body')
			const isClosed = currentBody.css('display') === "none";
			currentBody.slideToggle();

			$('.menu-head').not(currentHead).removeClass('active');
			
			currentHead.addClass('active');
			toggleMenuButton(currentHead, isClosed)
			if (!isClosed) {
				resetSubMenuStyles(currentHead)
			}
		})

		function toggleMenuButton(menuHead, open) {
			const newBackground = open
				? "url(images/arrow__top-blue.svg) no-repeat center"
				: "url(images/arrow__bottom-bk.svg) no-repeat center";
			menuHead.find(".menu-btn").css("background", newBackground);
		}
		function resetSubMenuStyles(currentHead) {
			currentHead.next(".menu-body").find(".menu-head").each(function () {
			$(this).next(".menu-body").slideUp();
			toggleMenuButton($(this), false);
		}
		);
		}



	// 권한별 메뉴 관리
	$(document).ready(function(){
	$('.menu-check .menu-head').on('click', function(){
		const currentHead = $(this)
		const currentBody = $(this).next('.menu-body')
		const isClosed = currentBody.css('display') === "none";
		if(currentHead.hasClass('active')){
			currentHead.removeClass('active')
		}else {
			$('.menu-head').removeClass('active');
			currentHead.addClass('active');
		}
		currentBody.slideToggle();
		if (!isClosed) {
			resetSubMenuStyles(currentHead)
			resetMenuBackground(currentHead)
		}
	})
	$('.menu-check input[type="checkbox"]').on('click', function(e) {e.stopPropagation()});
	function resetMenuBackground(){currentHead.next(".menu-body").find('.sub-ul > li').removeClass('on');}})	
});

	

$(document).ready(function(){
	var navBgH;
	/*alert($(".nav ul li").length);*/
//	if($(".nav ul li").length==5 || $(".nav ul li").length==7 || $(".nav ul li").length==8 || $(".nav ul li").length==9 || $(".nav ul li").length==10 ){
	// if($(".nav ul li").length==5 || $(".nav ul li").length==7 || $(".nav ul li").length==8 || $(".nav ul li").length==9 || $(".nav ul li").length==10 || $(".nav ul li").length==11 ){
	// 	navBgH = $(".nav ul li:first-child .drop").outerHeight();
	// }else if($(".nav ul li").length >= 13 ){
	// 	navBgH = $(".nav ul li:last-child .drop").outerHeight();
	// }
	
//	$(".navBg").css("height",navBgH + 27);
	// $(".navBg").css("height",navBgH + 14);
	
	// $("header").mouseenter(function(){
    // 	$(".drop").show();
    // 	$(".navBg").show();
	// });
	// $("header").mouseleave(function(){
    // 	$(".drop").hide();
    // 	$(".navBg").hide();
	// });
	// $(".nav ul li a").focus(function(){
	// 	$(".drop").show();
	// 	$(".navBg").show();
	// });
	// $(".nav ul li a").blur(function(){
    // 	$(".drop").hide();
    // 	$(".navBg").hide();
	// });

	
	/* Mobile Menu */
	var moGnbLi = $('.mobileMenu > ul > li');
	$(".mobileMenuBtn").click(function(){
	    $(this).toggleClass("on");
	    $(".mobileMenu").toggleClass("On");
		if( $(".mobileMenu.On")){
			moGnbLi.click(function(){
				$('.tm_02dep').stop().slideUp();
				$(this).find('.tm_02dep').stop().slideToggle();
			});
		}
	});

	/*Sub Navigation*/
	$(".subNav div").click(function(){
		$(this).toggleClass("on");
		$(this).siblings("div").children("ul").slideUp();
		$(this).children("ul").slideToggle();
	});

	/* Open Tab */
	$(".tabContent").eq(0).show(0);
	$(".tabBtns h2").click(function () {
		var idx = $(this).index();
		$(".tabContent").hide();
		$(".tabContent").eq(idx).fadeIn();
		$(".tabBtns button").removeClass("active");
		$(this).children().addClass("active");
	});

	/* Modal */
	$('.modalBtn').click(function(){
		$(this).siblings('.modal').fadeIn();
	});
	$('.modalContent').click(function(){
		$('.modal').fadeOut();
	});

	/*List Table style*/
	$('.foldStyle tr').click(function(){
		$(this).next('tr').find('td p').slideToggle().css('border-top', '1px solid #ddd');
	});

	/*Table style*/
	if( $('.horizontal tbody tr').find('th').length >= 2){
		$('.horizontal tbody tr').find('th').not('th:first-child').css('border-left','1px solid #ddd');
	};
	$('.table.hover tr').click(function(){
		$('.table.hover tr').removeClass("on");
		$(this).addClass("on");
	});

	/*MainPage Table style*/
	
	$('.tdHover td').mouseenter(function(){
		var tdText = $(this).html();
		$(this).append("<p class='tooltip'>" + tdText + "</p>");
		$(this).find('.tooltip').animate({opacity:'1'}, 300);
	});
	$('.tdHover td').mouseleave(function(){
		$(this).find('.tooltip').remove();
	});
	
	/*Login Page*/
	$('.pageLogIn').parents('body, html').css('height', '100%');

    /* Modal */
    var $this;

    $(".openPopup").on("click", function(event) {
    	$this = $(this);
    	$("#popup").fadeIn(400).attr("tabindex", 0).show().focus();;   //팝업 오픈
   		$("body").append('<div class="bgPopup"></div>');
   		
   		fn_search_modal();
    });
    
    /* Title Line Button */
    if( $(".conTitle > .buttonRow > button").length >= 5 ){
    	$("button").parent(".buttonRow").addClass("long");
    }
    
    $("body").on("click", function(event) { 
        if(event.target.className == 'bgPopup'){
            $("#popup").fadeOut(400); 
            $(".bgPopup").fadeOut(400);
            $this.siblings("input, a, button").focus();
        }
    });
    $("#popup .close").on("click", function(event) { 
        $("#popup").fadeOut(400); 
        $(".bgPopup").fadeOut(400);
        $this.siblings("input, a, button").focus();
    });
    
    /* Tooltip Mobile */
    if($(window).width()<480){
    	$(".btnTootip").click(function(){
    		$(this).toggleClass("on");
    	});
    };
    
}); 



