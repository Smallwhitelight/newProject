// let randomColor = Math.floor(Math.random()*16777215).toString(16);
//
// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
// }
//
// p1.addEventListener("dblclick", setBg);
// setBg();
const body = document.querySelector('body')

patrat1 = document.querySelector('.p1')
patrat2 = document.querySelector('.p2')
patrat3 = document.querySelector('.p3')
patrat4 = document.querySelector('.p4')

patrat1.addEventListener('dblclick', () => {
    body.style.backgroundColor = 'black'
})

patrat2.addEventListener('dblclick', () => {
    body.style.backgroundColor = 'pink'
})

patrat3.addEventListener('dblclick', () => {
    body.style.backgroundColor = 'red'
})

patrat4.addEventListener('dblclick', () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = "rgb(" + x + "," + y + "," + z + ")";
    body.style.backgroundColor = bgColor
})

