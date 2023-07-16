const boton = document.querySelector('.form__btn');
const email = document.querySelector('.email');
const inputs = document.querySelectorAll('.form__caja--input');
const password = document.querySelector('.password');
const mostrarPassword = document.querySelector('.ojo');


boton.addEventListener('click', (event) => {
    event.preventDefault();
    validarCampos();
    if (email.value != '') {
        if (validateEmail(email.value) == false) {
            email.style.borderColor = 'red';
            email.value = '';
            email.setAttribute("placeholder", "name@host.tld");
            email.closest('.form__caja').querySelector('.error').style.display = 'block';
            email.closest('.form__caja').querySelector('.form__caja--icon').style.visibility = 'visible';
            email.closest('.form__caja').querySelector('.error').innerHTML = 'Looks like this is not an email';
            // error.innerHTML = 'Please provide a valid email address';

        } else {
            email.style.borderColor = 'green';
        }
    }


});

mostrarPassword.addEventListener('click', () => {
    if (password.value != '') {
        if (mostrarPassword.getAttribute('class') == 'ojo fa-solid fa-eye fa-lg') {

            password.closest('.form__caja').querySelector('.ojo').className = 'ojo fa-solid fa-eye-slash fa-lg';
            password.setAttribute('type', 'text');
        } else {
            password.closest('.form__caja').querySelector('.ojo').className = 'ojo fa-solid fa-eye fa-lg';
            password.setAttribute('type', 'password');

        }

    }
})

function validarCampos() {

    inputs.forEach(element => {
        if (element.value.trim() == '') {
            element.style.color = 'red';
            element.closest('.form__caja').querySelector('.error').style.display = 'block';
            element.closest('.form__caja').querySelector('.form__caja--icon').style.visibility = 'visible';
            element.style.borderColor = 'red';

        } else {
            element.value = element.value.trim();
            element.style.color = 'black';
            element.closest('.form__caja').querySelector('.error').style.display = 'none';
            element.closest('.form__caja').querySelector('.form__caja--icon').style.visibility = 'hidden';
            element.style.borderColor = 'green';

        }
    });

};

function validateEmail(email) {

    let expReg = /^[^@\s]+@[^@\s]+\.[^@\s\0-9]+$/;
    return expReg.test(email);

}