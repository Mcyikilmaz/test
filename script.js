document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simuleer een succesvolle verzending
  document.getElementById('form-message').textContent = `Bedankt voor je bericht, ${name}! We nemen zo snel mogelijk contact met je op.`;
  document.getElementById('form-message').classList.remove('hidden');

  // Reset het formulier
  e.target.reset();
});
