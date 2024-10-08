const asunto = document.getElementById('asunto');
const cc = document.getElementById('cc');
const mensaje = document.getElementById('mensaje');

function validarAsunto() {
    const asuntoError = document.getElementById('asunto-error');
    if (asunto.value.trim() === '') {
        asunto.classList.add('is-invalid');
        asunto.classList.remove('is-valid');
        asuntoError.textContent = 'El asunto no puede estar vacío.';
        asuntoError.style.display = 'block';
    } else {
        asunto.classList.add('is-valid');
        asunto.classList.remove('is-invalid');
        asuntoError.style.display = 'none';
    }
}

function validarCorreo() {
    const ccError = document.getElementById('cc-error');
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(cc.value.trim())) {
        cc.classList.add('is-invalid');
        cc.classList.remove('is-valid');
        ccError.textContent = 'Debe ser un correo electrónico válido.';
        ccError.style.display = 'block';
    } else {
        cc.classList.add('is-valid');
        cc.classList.remove('is-invalid');
        ccError.style.display = 'none';
    }
}

function validarMensaje() {
    const mensajeError = document.getElementById('mensaje-error');
    if (mensaje.value.trim() === '') {
        mensaje.classList.add('is-invalid');
        mensaje.classList.remove('is-valid');
        mensajeError.textContent = 'El mensaje no puede estar vacío.';
        mensajeError.style.display = 'block';
    } else {
        mensaje.classList.add('is-valid');
        mensaje.classList.remove('is-invalid');
        mensajeError.style.display = 'none';
    }
}

asunto.addEventListener('blur', validarAsunto);
cc.addEventListener('blur', validarCorreo);
mensaje.addEventListener('blur', validarMensaje);

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    validarAsunto();
    validarCorreo();
    validarMensaje();

    if (asunto.classList.contains('is-invalid') ||
        cc.classList.contains('is-invalid') ||
        mensaje.classList.contains('is-invalid')) {
        event.preventDefault();
    }
});
