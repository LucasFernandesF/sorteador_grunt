document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function() {
        event.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo - parseInt(numeroMaximo)

        let numeroAleatorio = Math.ceil() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio);
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})