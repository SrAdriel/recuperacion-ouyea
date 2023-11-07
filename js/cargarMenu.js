document.addEventListener('DOMContentLoaded', function(){
    const ContenedorMenu = document.getElementById("contenedorMenu");
    const menuHTML = menuRepo();

    ContenedorMenu.innerHTML = menuHTML;
})