const passwordInput = document.getElementById("password");
const confirmPassInput = document.getElementById("ConfiPass");
const eyeIcon = document.getElementById("eye-icon");

eyeIcon.addEventListener("click", () => {
  togglePasswordVisibility(passwordInput);
  togglePasswordVisibility(confirmPassInput);
  toggleEyeIcon();
});

function togglePasswordVisibility(input) {
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

function toggleEyeIcon() {
  if (eyeIcon.classList.contains("fa-eye")) {
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}
