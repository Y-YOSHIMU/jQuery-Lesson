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

$(function(){
	$('.box1').on('click', function(){
		$('.box1').addClass('box1-ext');
	});

	$('.box1').mouseout(function(){
		$('.box1').removeClass('box1-ext');
	});
});