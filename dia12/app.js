let box = document.querySelector('.box');
let input = document.querySelector('input[type="text"]'); // Correção na seleção do input

input.addEventListener('input', () => {
    let value = input.value;

    // Tenta aplicar o valor como border-radius (números + 'px') e cor de fundo
    if (!isNaN(value)) {
        box.style.borderRadius = `${value}px`; // Aplica valor numérico para border-radius
    } else {
        box.style.background = value; // Se for uma cor (nome ou código), aplica ao background
    }
});
