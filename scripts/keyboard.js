const body = document.body

const keysPressed = new Set()
const keyDown = (event) => {
    if (!keysPressed.has(event.code) && !event.repeat) {
        keysPressed.add(event.code);
    }
}
const keyUp = (event) => {
    runOnKeys(
        () => event.target.style.backgroundColor = 'gray',
        "KeyV",
        "KeyJ",
        "KeyA"
    );
    if (keysPressed.has(event.code)) {
        keysPressed.delete(event.code);
    }
}
const runOnKeys = ((action, ...keys) => {
    if (keys.every(key => keysPressed.has(key))) {
        action();
    }
})

window.document.addEventListener('keydown', keyDown);
window.document.addEventListener('keyup', keyUp);


body.addEventListener('keydown', (event) => {
    if (event.keyCode === 82) {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let color = "rgb(" + x + "," + y + "," + z + ")";
        event.target.style.backgroundColor = color
    }
})

