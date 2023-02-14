const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email;
    const password = formElements.password;

    if (email.value === '' || password.value === '') {
        return alert (`Всі поля мають бути заповнені`)
    } 
    const formData = {
        email: email.value,
        password: password.value,
    }
    console.log(formData);
    event.currentTarget.reset();
}