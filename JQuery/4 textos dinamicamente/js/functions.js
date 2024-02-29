$(function(){

	// var el = $('.box');
	// var el2 = $('.box2'); 

	// el.html('<div class="teste">Meu elemento!</div>');


	// // juntar codigos html
	// el.html(el.html()+'<h1 class="texto1">Meu Texto Via Java Script</h1>');

	// $('.box2').text('<div></div>');

	// $('.box2').text($('.box2').text() + 'ola mundo');

	// $('input[type=text]').val('ola mundo');

	// $('textarea').text('ola mundo');


	// console.log(el.text());
	// console.log($('.box2').text());

	$('input[type=button]').click(function(){
		var str = $('input[type=text]').val();
		// split separa nossa string com base no delimitador.
		/*
		 var var2 = v.split('@');
		 console.log(var2);
		 */

		//substr recorta nossa string.
		/* 
		console.log(str.substr(0,4));
		*/

		var splitstr = str.split('@');

		if(splitstr[1] == 'gmail.com'){
			alert('ta certo ai garai kkkkkkkkkkkk')
		}else{
			alert('errado ta essa porra ai mermao');
		}

	})



});