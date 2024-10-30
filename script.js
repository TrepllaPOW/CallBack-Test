function openNav() {
    document.getElementById("mySidenav").style.left = "0"; // Abre o menu
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px"; // Fecha o menu
}

// Adiciona um listener para fechar o menu ao clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('#openMenuBtn') && !event.target.matches('.sidenav') && !event.target.matches('.sidenav a')) {
        closeNav();
    }
};
