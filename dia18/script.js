// Função para gerar uma senha aleatória
function gerarSenha() {
    // Captura o valor do tamanho da senha a partir do range
    const tamanho = document.getElementById('width').value;
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let senha = '';

    // Gera uma senha aleatória com base no tamanho escolhido
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    // Exibe a senha gerada no HTML
    document.getElementById('password').textContent = senha;
}

// Função para copiar a senha ao clicar
document.getElementById('password').addEventListener('click', function() {
    const senha = document.getElementById('password').textContent;

    // Cria um elemento temporário para copiar o texto
    const tempInput = document.createElement('input');
    tempInput.value = senha;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Alerta o usuário de que a senha foi copiada
    alert('Senha copiada para a área de transferência!');
});
