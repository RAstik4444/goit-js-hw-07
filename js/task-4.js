const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === "") {
    return console.log(alert("All form fields must be filled in"));
  }

  console.log([`Login: ${login}, Password: ${password}`]);
  form.reset();
}