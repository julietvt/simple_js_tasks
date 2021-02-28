/*
class User {
  constructor(userName, userEmail) {
    this.userName = userName;
    this.userEmail = userEmail;
  }
}
const submit = document.querySelector('input[type=submit]');
const userNameInput = document.querySelector('#userName');
const userEmailInput = document.querySelector('#userEmail');

let user;

submit.addEventListener('click', function (event) {
  user = new User(userNameInput.value, userEmailInput.value);
  localStorage.setItem(user.userName, JSON.stringify(user));
});
*/
class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

function validateData(event) {
  event.preventDefault();
  event.stopPropagation();
  let userFname = document.getElementsByName('userFName')[0];
  let userLname = document.getElementsByName('userLName')[0];
  let userEmail = document.getElementsByName('userEmail')[0];
  let userPassword = document.getElementsByName('userPass')[0];
  let userConfirmPassword = document.getElementsByName('userCPass')[0];
  let namePattern = /^[a-zA-Z0-9]{6,20}$/;
  let emailPattern = /^(\w+)@(\w+\.)(\w+)$/;
  let passwordPattern = /^(?=.*\d)(?=.*?[A-Z]).{8,20}$/;
  let wrongStyle = '4px solid red';
  let rightStyle = '4px solid green';

  if (!namePattern.test(userFname.value)) {
    userFname.style.border = wrongStyle;
  } else {
    userFname.style.border = rightStyle;
  }

  if (!namePattern.test(userLname.value)) {
    userLname.style.border = wrongStyle;
  } else {
    userLname.style.border = rightStyle;
  }

  if (!emailPattern.test(userEmail.value)) {
    userEmail.style.border = wrongStyle;
  } else {
    userEmail.style.border = rightStyle;
  }
  if (!passwordPattern.test(userPassword.value)) {
    userPassword.style.border = wrongStyle;
  } else {
    userPassword.style.border = rightStyle;
  }
  if (userConfirmPassword.value !== userPassword.value) {
    userConfirmPassword.style.border = wrongStyle;
  } else {
    userConfirmPassword.style.border = rightStyle;
  }
  let user = new User(userFname.value, userLname.value, userEmail.value);
  window.localStorage.setItem('user', JSON.stringify(user));
  console.log(window.localStorage.getItem('user'));
}

let submitUserData = document.getElementsByName('submitData')[0];
submitUserData.addEventListener('click', validateData);
submitUserData.addEventListener('submit', validateData);
