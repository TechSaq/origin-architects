const email = document.querySelector('input#email');
const emailError = document.querySelector('p.error');

const phone = document.querySelector('input#phone');
const errorPhone = document.querySelector('p.error');


function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return (true)
    }
    const errorNode = document.createElement('p');
    errorNode.classList.add('error');
    errorNode.innerText = "Enter valid email address!!";

    email.after(errorNode);

}

function validatePassword() {
    if (/^[1-9]\d{9}$/.test(email.value)) {
        return (true)
    }

    const errorNode = document.createElement('p');
    errorNode.classList.add('error');
    errorNode.innerText = "Enter valid phone number!!";

    phone.after(errorNode);
}


email.addEventListener('change', validateEmail);
email.addEventListener('click', () => {
    email.nextSibling.remove();

})
phone.addEventListener('change', validatePassword);
phone.addEventListener('click', () => {
    phone.nextSibling.remove();

})