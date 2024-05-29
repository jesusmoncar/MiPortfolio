'use strict';

(function() {
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                var alertDiv = document.getElementById('formAlert');
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    alertDiv.classList.remove('d-none');
                    setTimeout(function() {
                        alertDiv.classList.add('d-none');
                    }, 7000); // Ocultar el alert después de 7 segundos
                } else {
                    event.preventDefault(); // Prevent default form submission
                    alertDiv.classList.add('d-none');
                    var solicitudId = 'ID-' + Math.floor(Math.random() * 1000000);
                    document.getElementById('solicitudIdDisplay').innerText = solicitudId;
                    var successModal = new bootstrap.Modal(document.getElementById('successModal'), { backdrop: 'static' }); // Evita que se cierre el modal al hacer clic fuera de él
                    successModal.show();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();