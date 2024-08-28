(function() {
    emailjs.init("6PUxpKzySlH6TIM63"); // Substitua pelo seu Public Key do EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    var templateParams = {
        from_email: email,
        message: message
    };

    emailjs.send('service_mfu6aeb', 'template_gkjm3rg', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('status').innerText = "Mensagem enviada com sucesso!";
    }, function(error) {
        console.log('FAILED...', error);
        document.getElementById('status').innerText = "Ocorreu um erro ao enviar a mensagem.";
    });
});
