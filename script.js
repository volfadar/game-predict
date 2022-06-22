// let putBomb = 'pB';

let namaPlayer = prompt('silahkan masukkan username Player 1');

let fieldNamaP1 = document.getElementById('p1');

fieldNamaP1.innerHTML = namaPlayer;

let putBomb = document.querySelectorAll('.field');

let x = true;

let text = 'field rocket';

let maxRocket = 4;

// function abc() {
//   putBomb.forEach((e, i) => {
//     e.setAttribute('id', 'field' + (i + 1));
//     e.setAttribute('class', 'field target');
//     e.innerHTML = i + 1;
//     e.style.fontSize = '15px';
//     e.style.border = '';
//     e.style.backgroundColor = '#472e162c';
//     e.style.color = '#685607';
//   });
// }

const bReset = document.getElementById('reset');

const jumlahRocket = document.getElementById('jumlahRocket');

putBomb.forEach((e, i) => {
  //   const default1 =
  //   function () {
  // e.style.fontSize = '15px';
  // e.style.border = '';
  // e.style.backgroundColor = '#472e162c';
  // e.style.color = '#685607';

  //   const check1 = function () {
  //     for (i = 0; i < maxRocket; i++) {
  //       const x = putBomb[i].getAttribute('class');
  //       if (x === 'field rocket') {
  //         maxRocket--;
  //         jumlahRocket.innerHTML = '= ' + maxRocket;
  //       }
  //     }
  //   };

  const mouseout = function () {
    e.innerHTML = i + 1;
    e.style.fontSize = '15px';
    e.style.border = '';
    e.style.backgroundColor = '#472e162c';
    e.setAttribute('class', 'field target');
  };

  const hover = function () {
    e.innerHTML = '+';
    e.style.fontSize = '25px';
    e.setAttribute('class', 'field target');
    e.style.border = '1px solid #7c6708';
    e.style.boxSizing = 'border-box';
    e.style.backgroundColor = '#693d1352';
  };

  const clickit = () => {
    e.innerHTML = '';
    e.style.borderColor = '#7c6708';
    e.style.backgroundColor = '#693d1352';
    e.setAttribute('id', 'rocket' + (i + 1));
    e.setAttribute('class', 'field rocket');
    e.removeEventListener('mouseout', mouseout);
    e.removeEventListener('mouseover', hover);
    for (tm = 0; tm < putBomb.length; tm++) {
      const x = putBomb[tm].getAttribute('class');
      if (x == 'field rocket') {
        maxRocket--;
        jumlahRocket.innerHTML = '= ' + maxRocket;
        e.setAttribute('class', 'field rocket qualified');
      } else if (maxRocket === 0) {
        return stopx;
      }
    }
  };

  e.addEventListener('mouseover', hover);

  e.addEventListener('mouseout', mouseout);

  e.addEventListener('click', clickit);

  e.addEventListener('dblclick', mouseout);

  e.setAttribute('id', 'field' + (i + 1));
  e.innerHTML = i + 1;
  e.style.fontSize = '15px';
  e.style.border = '';
  e.style.backgroundColor = '#472e162c';
  e.style.color = '#685607';

  function stopx() {
    forEach((e) => {
      e.removeEventListener('click', clickit);
    });
  }
});

// const check = function () {
//   for (i = 0; i < maxRocket; i++) {
//     const x = putBomb[i].getAttribute('class');
//     if (x === 'field rocket') {
//       maxRocket--;
//       jumlahRocket.innerHTML = '= ' + maxRocket;
//     }
//   }
// };

// bReset.addEventListener('click', abc);

// putBomb[1].addEventListener('click', function () {
//   //   this.innerHTML = 'p';
//   return alert('bambang');
// });
