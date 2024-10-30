function updateAuthMenu() {
    fetch('/status') // Verifique o endpoint correto
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta da rede');
            }
            return response.json();
        })
        .then(data => {
            const authMenu = document.getElementById('authMenu');
            if (authMenu) {
                if (data.authenticated) {
                    authMenu.innerHTML = `
                        <img src="${data.user.avatar}" alt="Avatar" class="avatar">
                        ${data.user.username}
                    `;
                    authMenu.href = "/logout"; // Mude para logout
                } else {
                    authMenu.textContent = "Login";
                    authMenu.href = "/auth/discord"; // Mude para login
                }
            } else {
                console.error('Elemento authMenu não encontrado na página.');
            }
        })
        .catch(error => console.error('Erro ao verificar autenticação:', error));
}

document.addEventListener('DOMContentLoaded', updateAuthMenu);
