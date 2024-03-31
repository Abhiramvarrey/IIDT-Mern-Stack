const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  clearErrors();

  let isValid = true;

  if (!nameInput.value.trim()) {
    showError(nameError, 'Please enter your name.');
    isValid = false;
  }

  if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
    showError(emailError, 'Please enter a valid email address.');
    isValid = false;
  }

  if (!passwordInput.value.trim()) {
    showError(passwordError, 'Please enter a password.');
    isValid = false;
  }

  if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
    showError(confirmPasswordError, 'Passwords do not match.');
    isValid = false;
  }

  if (isValid) {
    form.submit();
  }
}

function showError(errorElement, message) {
  errorElement.textContent = message;
  errorElement.style.opacity = '1';
}

function clearErrors() {
  nameError.style.opacity = '0';
  emailError.style.opacity = '0';
  passwordError.style.opacity = '0';
  confirmPasswordError.style.opacity = '0';
}

function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}