/*trocar imgLogo*/ 
function atualizarSrcDaImagem(){
    if(window.innerWidth <= 850){
    var imgDesktop = document.getElementById("img-logo-desktop")

    imgDesktop.src = "assets/logo-mobile.svg"
    } else{
        var imagem = document.getElementById("img-logo-desktop");
        imagem.src = "assets/logo-desktop.svg";
    }
}
//adicionar texto na versao mobile 
function adicionarTexto() {
    if (window.innerWidth <= 850) {
        var h1 = document.createElement("h1")
        h1.textContent = " O café que fará seu código decolar para o próximo nível."

        var localInserido = document.querySelector(".article")

        localInserido.innerHTML=''
        localInserido.appendChild(h1)
    }else{
        var h1Existente = document.querySelector(".article h1")
        h1Existente.remove()
    }
}

// efeito de fechar e abri img hamburger  juntamente com menu completo 
var btnHamburger = document.getElementById("burguer-menu")
var menuHamburger = document.getElementById("menu-mobile")
var isMenuOpen = false;

btnHamburger.addEventListener('click', function() {
    if (isMenuOpen) {
        btnHamburger.src = "assets/menu-buguer-open.svg";
        menuHamburger.style.display="none"
        
    } else {
        btnHamburger.src = "assets/menu-buguer-close.svg";
        menuHamburger.style.display="block"      
    }
    isMenuOpen = !isMenuOpen;  
})

//load recaregar a funçao toda vez que carregar a pagina 
//resize carregar a funçao toda vez que a janela semodificar
window.addEventListener("load", atualizarSrcDaImagem);

window.addEventListener("resize", atualizarSrcDaImagem);

window.addEventListener("load", adicionarTexto);

window.addEventListener("resize", adicionarTexto);

//efeito de selecionado do menumobile

const items = document.querySelectorAll('.li');

items.forEach(item => {
    item.addEventListener('click', () => {
        // Remova a classe 'selecionado' de todos os itens
        items.forEach(otherItem => {
            otherItem.classList.remove('selecionado');
        });

        // Adicione a classe 'selecionado' apenas ao item clicado
        item.classList.add('selecionado');
    });
});

