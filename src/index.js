const userData = [
  {"fname":"esme", "lname":"sanchez", "id":1892038, "isTherapist":true},
  {"fname":"rick", "lname":"jeps", "id":1894024, "isTherapist":false},
  {"fname":"angie", "lname":"lange", "id":1982403, "isTherapist":false},
  {"fname":"renat", "lname":"gros", "id":1894039, "isTherapist":true},
  {"fname":"bettino", "lname":"yang", "id":3789204, "isTherapist":true}
]

const showUsers = () => {
  allUsers.innerHTML = '';
  userData.forEach(user => {
    allUsers.innerHTML += `<section class="user"> <p>${upperCase(user.lname)}, ${upperCase(user.fname)}</p> </section>`
  })
}

const allUsers = document.querySelector('#allUsers');

window.addEventListener('load', showUsers);

const upperCase = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
