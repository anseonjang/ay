$(document).ready(function(){
	//main-visual
	$(".visual_slider").slick({
		fade:true,
		autoplaySpeed:4000,
		autoplay:true, 
		infinite: true,
		dots:true,
		arrows:false, 
		pauseOnHover: false,
		speed:500,
		lazyLoad: "progressive", //로딩이 완료 된 후 이미지를 로드
	}).slickAnimation();

	//news
	$(".news_slider").slick({
		autoplay:false, 
		vertical: true,
		infinite: true,
		slidesToShow:1, 
		dots:false,
		arrows:true, 
		speed:500,
		focusOnSelect: true,
		prevArrow:$("#banner_prev"),
		nextArrow:$("#banner_next"),
	});

	//banner_slider
	$(".banner_slider").slick({
		autoplay:false, 
		infinite: true,
		slidesToShow:1, 
		dots:true,
		arrows:false, 
		speed:500,
		focusOnSelect: true,
	});

	//notice_slider
	$(".notice_slider").slick({
		autoplay:false, 
		infinite: true,
		slidesToShow:3, 
		dots:true,
		arrows:false, 
		speed:500,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					centerMode: true,
					centerPadding: '60px',
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 431,
				settings: {
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 1,
				}
			},
		]
	});

	//tab
	$(".inner_bbs li").click(function(){
		var $this = $(this);
		var index = $this.index(); 
		$this.addClass("active");
		$this.siblings(".inner_bbs li.active").removeClass("active");

		var $wrap = $this.closest(".inner_bbs");
		var $current = $wrap.find("> .tabs > .tab.active");
		var $post = $wrap.find("> .tabs > .tab").eq(index);

		$current.removeClass("active");
		$post.addClass("active");

		$(".slider").slick("setPosition");
	});

	$(".slider").slick({
		dots:true,
		arrows:false, 
		slidesToShow:3, 
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '60px',
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '30px',
				}
			},
			{
				breakpoint: 376,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '10px',
				}
			},
        ]
	});
});