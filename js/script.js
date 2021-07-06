/* pc 메뉴 */
$('.depth01').on({"mouseover focusin":function(){
	$(this).addClass('active');
	}, "mouseout focusout":function(){
	$(this).removeClass('active');
	}
});

/* 모바일 메뉴 */
$('.menu_btn').click(function(){
	$('.bar').toggleClass('add');
	$('.mobile_nav').toggle("slide");
	$('.sub').slideUp();
});

/* 모바일 메뉴 슬라이드 */
$('.sub').hide();
$('.title').click(function(){
	$(this).siblings('.switch').toggleClass('on');
	$(this).next().slideToggle();
});

/* 모바일 메뉴 switch */
$('.switch').click(function(){
	$(this).toggleClass('on');
	$(this).siblings('.sub').slideToggle();
});


/* 헤더 줄어듬 */
var shrinkHeader = 300;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.pc').addClass('shrink');
        }
        else {
            $('.pc').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}


/* 배너 */
let banner=$('.slides>li'),
	pagerBtn=$('.pager>li'),
	prevBtn=$('.controlBtn .prev'),
	nextBtn=$('.controlBtn .next'),
	current=0,
	timer=undefined;

function imgslide(){
	timer=setInterval(function(){
		const prev=banner.eq(current);
		const prevpage=pagerBtn.eq(current);
		move(prev,0,'-100%');
		prevpage.removeClass('on');
		current++;
		if(current==banner.size()){
			current=0;
		}
		const next=banner.eq(current);
		const nextpage=pagerBtn.eq(current);
		move(next,'100%',0);
		nextpage.addClass('on');
	},3000);
}
function move(tg,start,end){
	tg.css('left',start).stop().animate({left:end},500)
}
imgslide();

/* pagerBtn */
pagerBtn.click(function(){
	let tg=$(this);
	let i=tg.index();
	pagerBtn.removeClass('on');
	tg.addClass('on');
	if(current>i){
		move2(i)
	}else{
		move1(i)
	}
});
function move1(i){
	if(current==i) return;
	let currentEl=banner.eq(current);
	const nextEl=banner.eq(i);
	currentEl.css('left','0').stop().animate({left:'-100%'},500);
	nextEl.css('left','100%').stop().animate({left:0},500);
	current=i;
}
function move2(i){
	if(current==i) return;
	let currentEl=banner.eq(current);
	const nextEl=banner.eq(i);
	currentEl.css('left','0').stop().animate({left:'100%'},500);
	nextEl.css('left','-100%').stop().animate({left:0},500);
	current=i;
}

/* 마우스 올리면 멈춤 */
$('.visualWrap').on({"mouseover focus":function(){
	clearInterval(timer);
	}, "mouseout blur":function(){
		imgslide();
	}
});

/* 배너 prev,next 버튼 */
prevBtn.click(function(){
	const prev=banner.eq(current);
	const prevpage=pagerBtn.eq(current);
	move(prev,0,'100%');
	prevpage.removeClass('on');
	current--;
	if(current==-banner.size()){
		current=0;
	}
	const next=banner.eq(current);
	const nextpage=pagerBtn.eq(current);
	move(next,'-100%',0);
	nextpage.addClass('on');
});

nextBtn.click(function(){
	const prev=banner.eq(current);
	const prevpage=pagerBtn.eq(current);
	move(prev,0,'-100%');
	prevpage.removeClass('on');
	current++;
	if(current==banner.size()){
		current=0;
	}
	const next=banner.eq(current);
	const nextpage=pagerBtn.eq(current);
	move(next,'100%',0);
	nextpage.addClass('on');
});


/* 이미지 슬라이드쇼 */
let interval=4000;
$('.slideshow').each(function(){
    let timer='undefined';
    let container=$(this);
    function switchImg(){
        const anchors=container.find('a');
        const first=anchors.eq(0);
        const second=anchors.eq(1);
        first.fadeOut().appendTo(container);
        second.fadeIn();
    }
    startTimer();
    function startTimer(){
        timer=setInterval(switchImg,interval)
    }
    function stopTimer(){
        clearInterval(timer);
    }
    container.hover(stopTimer,startTimer);
});


/* top버튼 */
$(window).scroll(function(){ 
	if($(this).scrollTop() > 250){
		$('#topBtn').fadeIn(); 
	}else{ 
		$('#topBtn').fadeOut();
	} 
});

$("#topBtn").click(function(){
	$('html, body').animate({scrollTop:0}, 400);
	return false; 
});			