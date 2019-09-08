var form = document.querySelector('form');
var username = document.getElementById('username');
var password = document.getElementById('password');
var passConfirm = document.getElementById('confirm-pass');


function isRequired(value) {
    return value!==undefined && value!== "";
}

function hasMinChars(numOfChars) {
    return function minLengthValidator(value) {
        return value.length >= numOfChars;
    }
}

const hasMinLength4 = hasMinChars(4);

function hasValidPw(value) {
    var pwReg = new RegExp/('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/')
    return pwReg.test(value);
}

function hasConfirmPw(value, passwordValue) {
    return value === passwordValue;
}


let formState = {
    isValid: true,
    field: {
        username: true,
        password: true,
        passConfirm: true,
    }
}

function onChange() {
    const isUserNameValid = isRequired(username.value) && hasMinLength4(username.value);
    const isPwValid = isRequired(password.value) && hasValidPw(password.value);
    const isPassConfirmed = isRequired(passConfirm.value) && hasConfirmPw(passConfirm.value, password.value);

formState.field.username = isUserNameValid;
formState.field.password = isPwValid;
formState.field.passConfirm = isPassConfirmed;

formState.isValid = isUserNameValid && isPwValid && isPassConfirmed;
username.nextElementSibling.innerHTML = isUserNameValid?"":"Error";
}

form.addEventListener('change', onChange());

console.log(formState);


//