document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            nome: form.nome.value,
            email: form.email.value,
            telefone: form.telefone.value
        };

        fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Falha ao enviar o formulário');
            }
        })
        .then(data => {
            console.log('Sucesso:', data);
            alert('Formulário enviado com sucesso!');
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao enviar o formulário.');
        });
    });
});
