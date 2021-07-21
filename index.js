import index.css;

const userData = [
  {"fname":"esme", "lname":"sanchez", "id":1892038, "isTherapist":true},
  {"fname":"rick", "lname":"jeps", "id":1894024, "isTherapist":false},
  {"fname":"angie", "lname":"lange", "id":1982403, "isTherapist":false},
  {"fname":"renat", "lname":"gros", "id":1894039, "isTherapist":true},
  {"fname":"bettino", "lname":"yang", "id":3789204, "isTherapist":true}
]

const allUsers = document.querySelector('#allUsers');

const upperCase = (word) => {
  return word.charAt(0).toUpperCase() + string.slice(1);
}

const showUsers = () => {
  allUsers.innerHTML = '';
  userData.forEach(user => {
    <section class="user">
      <p>${upperCase(user.lname)},${upperCase(user.fname)}</p>
    </section>
  })
}
