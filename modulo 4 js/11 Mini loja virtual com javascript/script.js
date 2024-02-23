const items = [
    {
        id: 0,
        nome: 'camiseta',
        img: 'image.jpg',
        quantidade: 0,
    },
    {
        id: 1,
        nome: 'short',
        img: 'image.jpg',
        quantidade: 0,
    },
    {
        id: 2,
        nome: 'sapato',
        img: 'image.jpg',
        quantidade:0,
    },
]

inicializarloja = () => {
    var containerprodutos = document.getElementById('produtos');

    items.map((val)=>{
        containerprodutos.innerHTML+= `

        <div class="produto-single">
            <img src="`+val.img+`" />
            <p>"`+val.nome+`"</p>
            <a key="`+val.id+`" href="#">Adicionar ao Carrinho</a>
        </div>


        `;
    })
}

inicializarloja();

function atualizarcarrinho(){
    var containercarrinho = document.getElementById('carrinho');

    containercarrinho.innerHTML = ""
    items.map((val)=>{
        if(val.quantidade > 0){
        containercarrinho.innerHTML+= `

        <p>`+val.nome+` | quantidade:`+val.quantidade+`</p>
        <hr>

        `;
        }
    })
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarcarrinho();
        return false;
    })
}

