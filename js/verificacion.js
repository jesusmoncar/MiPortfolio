'use strict';

(function () {
    let forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                let modal = new bootstrap.Modal(document.getElementById('confirmModal'));
                modal.show();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

document.getElementById('confirmModal').addEventListener('hidden.bs.modal', function () {
    let form = document.getElementById('contactForm');
    if (form.checkValidity()) {
        let alerta = document.getElementById('alerta');
        alerta.classList.remove('d-none');

        form.reset();
        form.classList.remove('was-validated');
        setTimeout(function () {
            alerta.classList.add('d-none');
        }, 5000);
    }
});