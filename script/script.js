function enviarParaAPI(event) {
    event.preventDefault();

    const form = document.getElementById('form');
    const nameInput = document.getElementById('Nm');
    const formData = new FormData(form);

    const currentUrl = window.location.href;
    const correctUrl1 = 'https://abacomunica.github.io/solicitacoes/video.html';
    const correctUrl2 = 'https://abacomunica.github.io/solicitacoes/artes.html';
    const correctUrl3 = 'https://abacomunica.github.io/solicitacoes/eventos.html';
    const correctUrl4 = 'https://abacomunica.github.io/solicitacoes/outros.html';

    console.log(currentUrl)

    if (currentUrl.startsWith(correctUrl1)) {
        const nomeComCorreto = `video => ${nameInput.value}`;
        formData.set('Nome', nomeComCorreto);
    }

    if (currentUrl.startsWith(correctUrl2)) {
        const nomeComCorreto = `artes => ${nameInput.value}`;
        formData.set('Nome', nomeComCorreto);
    }

    if (currentUrl.startsWith(correctUrl3)) {
        const nomeComCorreto = `eventos => ${nameInput.value}`;
        formData.set('Nome', nomeComCorreto);
    }

    if (currentUrl.startsWith(correctUrl4)) {
        const nomeComCorreto = `outros => ${nameInput.value}`;
        formData.set('Nome', nomeComCorreto);
    }


    fetch('https://api.sheetmonkey.io/form/m2sKkL95kkQF8N6hwA9JHv', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar os dados para a API.');
        }
        alert('Dados enviados com sucesso!');
        setTimeout(() => {
            window.location.href = 'https://abacomunica.github.io/solicitacoes/redirecionado.html';
        }, 500);
        console.log('redirecionado');
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar os dados para a API.');
    });
}

document.getElementById('form').addEventListener('submit', enviarParaAPI);