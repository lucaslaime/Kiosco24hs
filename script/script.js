// Validación del formulario de contacto
/*document.getElementById('contact-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Todos los campos son obligatorios');
        event.preventDefault();
    }
}); */

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío automático del formulario
    
    // Validación de campos
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var reason = document.getElementById('reason').value;
    var uploadImage = document.getElementById('upload-image').value.trim(); // Validación del archivo
    
    // Validación básica: verificar que los campos obligatorios no estén vacíos
    if (name === '' || email === '' || message === '' || reason === '' || uploadImage === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }
    
    // Aquí puedes agregar cualquier lógica adicional antes de enviar el formulario, como AJAX para enviar los datos
    
    // Si todo está validado, enviar el formulario
    this.submit();
});