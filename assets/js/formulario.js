const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('https://ejemplo.com/contacto', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    alert('¡Gracias por contactarnos!');
    form.reset();
  })
  .catch(error => {
    alert('Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.');
  });
});