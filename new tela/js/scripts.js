function exibirCadastro() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('cadastro').style.display = 'block';
}

function fecharCadastro() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('cadastro').style.display = 'none';
}
function limparCampos() {
    document.getElementById('username').value = ''; // Limpa o campo de nome de usuário
    document.getElementById('password').value = '';
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('newTelefone').value = '';
    
}


function cadastrarUsuario(event) {
    event.preventDefault();
    alert('Cadastro realizado com sucesso!');
    fecharCadastro();
}

