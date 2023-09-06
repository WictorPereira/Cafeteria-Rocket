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

window.addEventListener("load", atualizarSrcDaImagem);

window.addEventListener("resize", atualizarSrcDaImagem);

window.addEventListener("load", adicionarTexto);

window.addEventListener("resize", adicionarTexto);



