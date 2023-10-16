const eyeIcon = document.getElementById("eye-icon");
const passwordInput = document.getElementById("password");

eyeIcon.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.add("fa-eye-slash");
    eyeIcon.classList.remove("fa-eye");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.add("fa-eye");
    eyeIcon.classList.remove("fa-eye-slash");
  }
});
