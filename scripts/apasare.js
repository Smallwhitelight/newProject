const patrat1 = document.querySelector('.p1');
const patrat2 = document.querySelector('.p2');
const patrat4 = document.querySelector('.p4');

const patrat3R = document.querySelector('.p3');

const body1 = document.querySelector('body');

const squareCenter = document.createElement('div');
squareCenter.classList.add('squareC');



patrat1.addEventListener('click', () => {
    patrat1.style.backgroundColor = 'pink';
})

patrat2.addEventListener('click', () => {
    patrat2.style.backgroundColor = 'deeppink';
})

patrat4.addEventListener('click', () => {
    patrat4.style.backgroundColor = 'hotpink';
})

let  a = 0
let  b = 0

patrat3R.addEventListener('click', () => {

    let top = a
    let left = b
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = "rgb(" + x + "," + y + "," + z + ")";
    body1.style.backgroundColor = bgColor;
    patrat3R.style.backgroundColor = 'lightpink';

    body1.append(squareCenter);
    if(top <= 650 && left <= 650) {
        const miniSquare = document.createElement('div');
        miniSquare.classList.add('mini');
        squareCenter.append(miniSquare);
        miniSquare.style.backgroundColor = bgColor;
        miniSquare.style.top = `${top}px`;
        miniSquare.style.left = `${left}px`;
        a = top + 25
        b = left + 25
    }
  /*  if (miniSquare.style.width !== squareCenter.style.width) {
        miniSquare.style.display = 'block'
    }*/

})
