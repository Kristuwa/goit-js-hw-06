const refs = {
  formRef: document.querySelector(".login-form"),
  emailRef: document.querySelector("input[name=email]"),
  passwordRef: document.querySelector("input[name=password]"),
  btnRef: document.querySelector("button"),
};
// const emailRef = document.querySelector("input[name=email]");
// console.log(emailRef);
refs.formRef.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const formData = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    return window.alert("Все поля должны быть заполнены!");
  }

  console.log(formData);

  event.currentTarget.reset();
}
