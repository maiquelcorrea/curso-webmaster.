window.onload = function(){
    var nome = 'maiquel';
    // ===  identico: tem que ser o mesmo valor e o mesmo tipe de variavel
    // == igual
    // != diferente
    // !== difrente e diferente tipo de variavel
    // && e
    // || ou
    // <= menor ou igual
    // >= maior ou igual
    // < menor
    // > maior

    /*
    if (nome == 'maiquel'){
        alert('condiçao verdadeira');
    }else{
        alert('condiçao falsa')
    }
    */

    var idade = (2016 - 1993);

    if(idade > 23){
        console.log('eu tenho mais de 23 anos de idade');
    }else if(idade < 10){
        console.log('menor do que 10');
    }else if(idade < 5){
        console.log('menor do que 5');
    }else{
        console.log('nenhuma das condiçoes é verdadeira');
    }

    var identico = 10;
    var ola = 12;

    if(identico == 10 || ola == 11){
        console.log('é identico');
    }else{
        console.log('é falso')
    }




}