$(function(){

	// funçao append() para adicionar conteudos/elemntos no dinal do elemento que celecionamos

	 	// $('.box').eq(0).append('<h3>Meu Elemento adicionado Dinamicamente</h3>');

		// $('.box div').append('<h3>Meu Elemento adicionado Dinamicamente</h3>');
	// 
		// var el = $('<h3>Meu Conteúdo</h3>').appendTo($('.box'));

		// el.css('color','red');
	// 
		// $('.box').prepend('<h3>Ola Mundo!</h3>');

		// var prep = $('<h3>Ola Mundo!</h3>').prependTo('.box');
		// prep.css('color','blue'); 
	//
		//  var t = '<p>meu conteudo após a div box</p>';
		// $('.box').after(t);
		// $('.box').before(t);

		// $(t).insertAfter($('.box')).css('color','pink');

		// $(t).insertBefore($('.box')).css('color','pink');
	// 

		setTimeout(function(){
			$('.box').eq(1).remove();
		},3000)
		

});