$(function(){		

	// $('a').click(function(){
	// 	$('.teste').css('display','block');
	// 	return false
	// })

	/*
	$('body').on('click','a',function(){
		alert('ola mundo');
		return false;
	})

	setTimeout(function(){
		$('body').html('<a href"">Meu Link1!!</a>');
	},3000)
	*/

	var func = function(){
		$('input[type=text]').eq($(this).index()).css('background','green');
	}

		// $('input[type=text]').keyup(func);
		$('input[type=text]').keydown(func);
});