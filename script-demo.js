// --- DEKLARASI ---

let fieldContainer = document.querySelector('.field-container');
let maxRocket = 4;
let maxShip = 8;
let jmlRocket = document.getElementById('jumlahRocket');
let fieldColoumn = 25;
let lokasiRocket = [];
const btnLauchNow = document.getElementById('launch');

for (i = 0; i < fieldColoumn; i++) {
  let elementField = document.createElement('li');
  let fieldText = document.createTextNode('x');
  elementField.appendChild(fieldText);
  elementField.classList.add('field');
  fieldContainer.appendChild(elementField);
}
let field = document.querySelectorAll('.field');

console.log(fieldContainer);

field.forEach((e, i) => {
  e.setAttribute('id', i + 1);
});

//
// --- HOVER ACTION ---

const fieldHover = (e) => {
  if (e.target.className == 'field') {
    for (i = 0; i < field.length; i++) {
      if (field[i].className == 'field plus') {
        if (field[i].children[0] != undefined) {
          if (field[i].children[0].className == 'field rocket') {
          }
        } else {
          field[i].innerHTML = 'x';
          field[i].style.fontSize = '15px';
          field[i].className = 'field';
        }
      }
    }
    e.target.innerHTML = '+';
    e.target.style.fontSize = '25px';
    e.target.className = 'field plus';
  }
  if (e.target.className == 'field-container') {
    for (i = 0; i < field.length; i++) {
      if (field[i].className == 'field plus') {
        if (field[i].children[0] != undefined) {
          if (field[i].children[0].className == 'field rocket') {
          }
        } else {
          field[i].innerHTML = 'x';
          field[i].style.fontSize = '15px';
          field[i].className = 'field';
        }
      }
    }
  }
};

//
// --- CLICK ACTION ---

const clickit = (e) => {
  if (e.target.className == 'field plus') {
    e.target.innerHTML = '';
    const fieldRocket = document.createElement('li');
    const contentRocket = document.createTextNode('');

    fieldRocket.appendChild(contentRocket);
    fieldRocket.className = 'field rocket';
    e.target.appendChild(fieldRocket);
    e.target.style.display = e.target.removeEventListener(
      'mouseover',
      fieldHover
    );
  }
  const sisaRocket =
    maxRocket - document.getElementsByClassName('rocket').length;
  console.log(sisaRocket);

  jmlRocket.innerHTML = '= ' + sisaRocket;

  if (sisaRocket == 0) {
    fieldContainer.removeEventListener('click', clickit);
  }
  const rocketGroup = document.querySelectorAll('.rocket');
  rocketGroup.forEach((e) => {
    e.parentElement.classList.add('fieldAfter');
  });
};

//
// --- LAUNCH NOW ACTION ---

const funcLaunchNow = (e) => {
  const rocketGroup = document.querySelectorAll('.rocket');
  console.log(rocketGroup);
  rocketGroup.forEach((e) => {
    e.classList.add('rocketLaunch');
  });
  rocketGroup.forEach((e, i) => {
    lokasiRocket[i] = e.parentElement.getAttribute('id');
  });
};

//
// --- A BUNCH OF EVENT LISTENER

fieldContainer.addEventListener('mouseover', fieldHover);

fieldContainer.addEventListener('click', clickit);

btnLauchNow.addEventListener('click', funcLaunchNow);

// const letakRocket = document.getElementsByClassName('rocket').length;
// const usedRocket = letakRocket.length;
