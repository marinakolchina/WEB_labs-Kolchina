function checkValid(fieldId, fieldValue, errorMessage) {
  if (!fieldValue) {
    setError(fieldId, errorMessage);
    return false;
  } else {
    clearError(fieldId);
    return true;
  }
}

function checkEmail(emailValue) {
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (emailValue && !emailRegex.test(emailValue)) {
    setError("email", "Неправильно введен e-mail");
    return false;
  }

  return checkValid("email", emailValue, "Введите  e-mail");
}

function checkConfirmPassword(confirmPasswordValue, password) {
  if (confirmPasswordValue && !(password === confirmPasswordValue)) {
    setError("confirm-password", "Пароли не совпадают");
    return false;
  }

  return checkValid(
    "confirm-password",
    confirmPasswordValue,
    "Введите пароль повторно"
  );
}

document.querySelector("form").onsubmit = function (event) {
  const nameValue = document.getElementById("username").value;
  const nameIsValid = checkValid("username", nameValue, "Введите username");

  const emailValue = document.getElementById("email").value;
  const emailIsValid = checkEmail(emailValue);

  const passwordValue = document.getElementById("password").value;
  const passwordIsValid = checkValid(
    "password",
    passwordValue,
    "Введите пароль"
  );

  const confirmPasswordValue =
    document.getElementById("confirm-password").value;
  const confirmPasswordValueIsValid = checkConfirmPassword(
    confirmPasswordValue,
    passwordValue
  );

  const isValid =
    nameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordValueIsValid;

  if (!isValid) {
    event.preventDefault();
  }
};

function setError(fieldId, message) {
  document.getElementById(fieldId).nextElementSibling.textContent = message;
}
function clearError(fieldId) {
  document.getElementById(fieldId).nextElementSibling.textContent = "";
}
