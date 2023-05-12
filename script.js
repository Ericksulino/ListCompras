var items =[];

document.querySelector('input[type=submit]')
.addEventListener('click',() =>{
    let nomeProd = document.querySelector('input[name = nome_produto]');
    let precoProd = document.querySelector('input[name = valor_produto]');
    let elemSoma = document.querySelector('.soma-produto h1');
    
    items.push({
        nome: nomeProd.value,
        valor: precoProd.value
    });
    let listaProd = document.querySelector('.lista-produtos');
    listaProd.innerHTML = "";
    let soma = 0;
    items.map((val) =>{
        soma+=parseFloat(val.valor);
        listaProd.innerHTML+= `
        <div class="lista-produto-single">
        <h3>`+val.nome+`</h3>
        <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
    </div>
        `
    })
    soma = soma.toFixed(2)
    nomeProd.value = "";
    precoProd.value = "";
    elemSoma.innerHTML = 'R$'+soma;
})