// Faz os botões "ADICIONAR" funcionarem
const botoesAdicionar = document.querySelectorAll('.produto button');
botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', (evento) => {
        const cardProduto = evento.target.closest('.produto');
        const nomeProduto = cardProduto.querySelector('h3').innerText;
        alert(`✨ ${nomeProduto} foi adicionado ao seu carrinho com sucesso!`);
    });
});

// Faz o formulário "INSCREVER-SE" funcionar
const formNewsletter = document.getElementById('newsletter-form');
formNewsletter.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const email = document.getElementById('email-input').value;
    alert(`🎉 Obrigado por se inscrever! Enviamos seu cupom de 10% de desconto para: ${email}`);
    formNewsletter.reset();
});