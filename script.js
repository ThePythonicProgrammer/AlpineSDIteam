document.addEventListener("DOMContentLoaded", function() {
  fields.first_name = document.getElementById('first_name');
  fields.last_name = document.getElementById('last_name');
  fields.email = document.getElementById('email');
  fields.response = document.getElementById('response');
})

class User {
  constructor(first_name, last_name, email, response) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.response = response;
  }
}

function sendContact() {
  let usr = new User(first_name.value, last_name.value, email.value, response.value);

  alert(`${usr.first_name} thanks for registering.`)
}
