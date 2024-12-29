document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const message = document.getElementById('formMessage');
  message.textContent = "Bedankt voor je bericht! We nemen spoedig contact met je op.";
  message.style.color = 'green';
  this.reset();
});
