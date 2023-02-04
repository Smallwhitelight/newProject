const body = document.querySelector("body")

const p1 = document.querySelector('.patrat1')
const p2 = document.querySelector('.patrat2')
const p3 = document.querySelector('.patrat3')
const p4 = document.querySelector('.patrat4')

p1.addEventListener("mouseenter",() => {
  body.style.backgroundColor = 'orange'
})
p2.addEventListener("mouseenter",() => {
  body.style.backgroundColor = 'green'
})
p3.addEventListener("mouseenter",() => {
  body.style.backgroundColor = 'black'
})
p4.addEventListener('mouseenter', () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";
  body.style.backgroundColor = bgColor
})
