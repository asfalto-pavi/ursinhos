const imagens = ['estilos/imagens/Wallpaper01.png', 'estilos/imagens/Wallpaper02.png', 'estilos/imagens/Wallpaper03.png', 'estilos/imagens/Wallpaper04.png', 'estilos/imagens/Wallpaper05.png', 'estilos/imagens/Wallpaper06.png', 'estilos/imagens/Wallpaper07.png' ]

var indexImagem = 0;
const unidade = 100/imagens.length
var margem = 0;

window.onload = load()

function load() {

    try {
        document.querySelector('.Indicador2').style.width = `${Math.round(unidade)}%`;
        
    } catch (error) {
        
    }
}

    
//carrossel

function slider (number) {
    indexImagem += number //aumenta em 1 a posição da imagem
    if(number > 0) 
    {
        margem = margem + unidade 
    }
    else 
    {
        margem = margem - unidade
    }

    if(indexImagem < 0) // Vai pro final
    {
        indexImagem = imagens.length -1
        margem = 100 - Math.round(unidade)
    }
    if(indexImagem == imagens.length) // Vai pro começo // IndexImagem começa a contar no zero, sua última posição é 6
    {
        indexImagem = 0
        margem = 0
    }

    document.getElementsByClassName('Carrocel')[0].style.backgroundImage = `url('${imagens[indexImagem]}')`
    document.getElementsByClassName('CarrocelFundo')[0].style.backgroundImage = `url('${imagens[indexImagem]}')`
    console.log("index: " + indexImagem)
    console.log("bar: " + Math.round(margem))
    console.log("unidade " + unidade)
    document.querySelector('.Indicador2').style.marginLeft = `${Math.round(margem)}%`
}


//cores produtos

function cores (number, cores) {
    var valorCor;
    switch (cores) {
        case "vermelho":
            valorCor = 90;
            break;
        case "verde":
            valorCor = 300;
            break;
        case "azul":
            valorCor = 190;
            break;
    
        default:
            valorCor = 0;
            break;
    }
    document.getElementsByClassName(`item-${number}-produtos`)[0].style.filter = `sepia(100%) hue-rotate(${valorCor}deg) saturate(700%)`;
}


//contador

function contador (valor, produto)
{
    let contagem = document.getElementById(`value${produto}`);
    if (valor == "menos" && contagem.innerHTML != 0) 
        contagem.innerHTML--;
    else if (valor == "mais") 
        contagem.innerHTML++;
};


//menu sanduíche

function menuShow() {
    const menuMobile = document.getElementsByClassName('mobile-menu')[0];
    if (menuMobile.classList.contains('open'))
    {
        menuMobile.classList.remove('open');
        document.querySelector('.menu').src = "estilos/imagens/menu.png";
    }
    else
    {
        menuMobile.classList.add('open');
        document.querySelector('.menu').src = "estilos/imagens/x.png";
    }
}