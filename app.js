// $(document).ready(function () {
// 	$('body').html('<h1>Hello jQuery!!</h1>');
// });

// ここから5章
// $(function(){
// 	$('.box1').css({
// 		'background-color': '#0000ff',
// 		'height': '100px'
// 	});
// });

// $(function(){
// 	$('.box1').slideUp();
// });

// $(function(){
// 	$('.box1').show();
// 	$('.box1').css({'background-color': '#0000FF'});
// });

// $(function(){
// 	$('.box1').hide();
// });

// 5章確認問題
// $(function(){
// 	$('.box1').slideDown(1000,function(){
// 		$('.box1').css({
// 			'background-color': '#0000FF',
// 			'width': '200px',
// 			'height': '100px'
// 		}).slideUp();
// 	});
// });

// 6章開始
// $(function(){
// 	$('.box1').mouseover(function(){
// 		$('.box1').addClass('box1-ext');
// 	});

// 	$('.box1').mouseout(function(){
// 		$('.box1').removeClass('box1-ext');
// 	});
// });

// $(function(){
// 	$('.box1').on('click', function(){
// 		$('.box1').addClass('box1-ext');
// 	});

// 	$('.box1').mouseout(function(){
// 		$('.box1').removeClass('box1-ext');
// 	});
// });

// 7章開始
// $(function(){
// 	$('.bg1').on('click', function(){
// 		$('.bg1').slideUp();
// 	});
// 	$('.bg2').on('click', function(){
// 		$('.bg2').slideUp();
// 	});
// 	$('.bg3').on('click', function(){
// 		$('.bg3').slideUp();
// 	});
// 	$('.bg4').on('click', function(){
// 		$('.bg4').slideUp();
// 	});
// });

// thisで書き換える
// $(function(){
// 	$('.box1').on('click', function(){
// 		$(this).slideUp();
// 	});
// });

// childrenを使う
$(function(){
	$('button').on('click', function(){
		$('ul').children().css('color', 'red');
	});
});