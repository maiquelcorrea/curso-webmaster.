window.onload = function(){

    // Laços de repetição

    // while -> precisamos de uma variavel inicial
    // for -> declara tudo em uma linha só
    // do -> sempre executa a açao andes de fazer a verificaçao
    /*
    var repeticao = 0;

    while(repeticao < 10){
        console.log('ola mundo! '+repeticao)
        repeticao++
    }

    console.log('cheguei até o final');
    */

    /*
    for(var numero = 0; numero < 10; numero++){
        console.log('ola mundo!');
    }
    */

    /*
    do{
        console.log('ola mundo!')
    }while(nome == 'maiquel');
    */

    for(var i = 0; i <= 10; i++){
        if(i == 2){
            continue;
        }

        console.log(i)
    }

}