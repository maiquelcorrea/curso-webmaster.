
/*
$(document).ready(function(){
    alert("ola mundo!")
})


$(function(){
    alert("ola mundo")
})

$(window).on('load', function(){
    alert("ola mundo!")
})
*/

// $(function(){
//     $('#teste').css('background-color','green').css('padding-left','10px');
// })

// $(function(){

//     function validarclickehover(){
//         $('.artigo1').click(function(){
//             $('.artigo2').css('background-color','purple');
//         })

//         $('.artigo1').hover(function(){
//             $('.artigo2').css('background-color','red')
//         },function(){
//             $('.artigo2').css('background-color','rgb(100,100,100)')
//         });

//         $('textarea').focus(function(){
//             console.log('Estou Dentro do textarea');
//         }).blur(function(){
//             console.log('Estou Fora do textarea');
//          })

        

//         $('.artigo1').click(function(){
//             console.log('meu click foi ativado')
//         })

//         $('.artigo1').hover(function(){
//            console.log('Meu hover foi ativado')
//         }).hover(function(){
//             console.log('meu hover foi desativado')
//         })
//     }
    
    

//     function validarformulario(){
//         $('select').change(function(){
//             console.log('meu select foi alterado');
//         })
//     }

//     validarformulario();
//     validarclickehover();

// })

$(function(){
    // var timer;

    // $(window).scroll(function(){
    //     // Evento de quando o scroll ocorre.
    // })

    // $(window).resize(function(){
    //     // console.log('minha tela esta sendo redimencionada');
    //     clearTimeout(timer);
    //     timer = setTimeout(function(){
    //         location.href = 'http://127.0.0.1:5500/index.html';
    //     },1000)

    // })

    // $('a').click(function(e){
    //     // e.preventDefault();
    //     // return false;
    // })

    $('.box').click(function(e){
        e.stopPropagation();
    })
    
    $('body').click(function(){
        $('.box').css('background-color','green')
    })
})
