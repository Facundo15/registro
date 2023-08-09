function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validationForm();
    })
});


function validationForm() {
    const inpName = document.getElementById('nombre').value;
    const inpLastName = document.getElementById('apellido').value;
    const inpEmail = document.getElementById('email').value;
    const inpPass = document.getElementById('password1').value;
    const inpPass2 = document.getElementById('password2').value;
    const check = document.getElementById('terminos').checked

    

    if (inpEmail === '' || inpName === '' ||
        inpLastName === '' || inpPass === '' || inpPass2 === '' ||
         !check) {
        console.log('Campos vaciós')
        showAlertError();
        return;
    }

    if (inpPass.length < 6) {
        console.log('Contraseña menor a 6 caracteres')
        showAlertError();
        return;
    }

    if (inpPass !== inpPass2) {
        console.log('contraseñas diferentes')
        showAlertError();
        return;
    }

    console.log('exitos')
    showAlertSuccess();
}

