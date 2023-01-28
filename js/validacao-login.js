const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameValidate();
  emailValidate();
  mainPasswordValidate();
  comparePassword();
  ruaValidate();
  cepValidate();
  bairroValidate();
  numeroValidate();
  complementoValidate();
});

function setError(index) {
  campos[index].style.border = '2px solid #ff7f00';
  spans[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function emailValidate() {
  if (!emailRegex.test(campos[0].value)) {
    setError(0);
  } else {
    removeError(0);
  }
}

function mainPasswordValidate() {
  if (campos[1].value.length < 8) {
    setError(1);
  } else {
    removeError(1);
    comparePassword();
  }
}

function nameValidate() {
  if (campos[2].value.length < 3) {
    setError(2);
  } else {
    removeError(2);
  }
}

function comparePassword() {
  if (campos[2].value == campos[3].value && campos[3].value.length >= 8) {
    removeError(3);
  } else {
    setError(3);
  }
}

function ruaValidate() {
  if (campos[4].value.length < 6) {
    setError(4);
  } else {
    removeError(4);
  }
}

function cepValidate() {
  if (campos[5].value.length < 9) {
    setError(5);
  } else {
    removeError(5);
  }
}

function bairroValidate() {
  if (campos[6].value.length < 10) {
    setError(6);
  } else {
    removeError(6);
  }
}

function numeroValidate() {
  if (campos[7].value.length < 5) {
    setError(7);
  } else {
    removeError(7);
  }
}

function complementoValidate() {
  if (campos[8].value.length < 20) {
    setError(8);
  } else {
    removeError(8);
  }
}