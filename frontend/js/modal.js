document.querySelectorAll('.blocoProduto').forEach(item => {
    item.addEventListener('click', event => {
        const modal = document.getElementById('modalProduto');
        const imageSrc = item.querySelector('img').src;
        const title = item.querySelector('.tituloOutroProduto').innerText;
        const price = item.querySelector('.preco').innerText;
        const whatsappMessage = encodeURIComponent(`Olá, estou interessado no produto: ${title}, que está por ${price}. Pode me dar mais informações?`);
        const whatsappLink = `https://wa.me/[+5511969195009]?text=${whatsappMessage}`;

        document.getElementById('modalImage').src = imageSrc;
        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalPrice').innerText = price;
        document.getElementById('whatsappLink').onclick = function() {
            window.location.href = whatsappLink;
        };

        modal.style.display = "block";
        setTimeout(() => modal.style.opacity = "1", 10); // Adiciona um atraso mínimo antes de mudar a opacidade
    });
});

// Corrigindo o fechamento do modal
document.querySelectorAll('.btn-close').forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.getElementById('modalProduto');
        modal.style.opacity = "0";
        setTimeout(() => modal.style.display = "none", 500); // Espera a animação terminar antes de ocultar
    });
});

// Clique fora do modal para fechar
window.onclick = function(event) {
    const modal = document.getElementById('modalProduto');
    if (event.target === modal) {
        modal.style.opacity = "0";
        setTimeout(() => modal.style.display = "none", 500); // Espera a animação terminar antes de ocultar
    }
};
