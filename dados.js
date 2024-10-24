// Função para armazenar os dados do registro
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const userTableBody = document.querySelector('#userTable tbody');
    const logoutButton = document.getElementById('logoutButton');

    // Registra novo usuário
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio padrão do formulário

            const username = document.getElementById('newUsername').value;
            const password = document.getElementById('newPassword').value;

            // Armazena o usuário e senha no localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));

            alert('Registro realizado com sucesso!');
            window.location.href = 'index.html'; // Redireciona para a página de login
        });
    }

    // Login
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio padrão do formulário

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Valida se as credenciais estão corretas
            if (username === 'admin' && password === 'admin') {
                alert('Bem-vindo, Admin!');
                window.location.href = 'app.html'; // Redireciona para a página de usuários
            } else {
                const users = JSON.parse(localStorage.getItem('users')) || [];

                // Verifica as credenciais armazenadas no localStorage
                const userFound = users.find(user => user.username === username && user.password === password);
                if (userFound) {
                    alert('Bem-vindo, ' + username + '!');
                    window.location.href = 'app.html'; // Redireciona para a página de usuários
                } else {
                    alert('Usuário ou senha incorretos!');
                }
            }
        });
    }

    // Gerencia a exibição dos usuários
    if (userTableBody) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.username}</td>
                <td>
                    <button class="delete-button" data-index="${index}">Deletar</button>
                </td>
            `;
            userTableBody.appendChild(row);
        });

        // Evento de logout
        logoutButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });

        // Deletar usuário
        userTableBody.addEventListener('click', function(event) {
            if (event.target.classList.contains('delete-button')) {
                const index = event.target.dataset.index;
                users.splice(index, 1); // Remove o usuário da lista
                localStorage.setItem('users', JSON.stringify(users)); // Atualiza o LocalStorage
                location.reload(); // Atualiza a tabela
            }
        });
    }
});