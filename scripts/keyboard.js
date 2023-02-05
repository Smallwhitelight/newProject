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

window.onload = () => {
    const button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};

const calculateBMI = () => {
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if (height === "" || isNaN(height)) {
        result.innerHTML = "Error Height!"
    } else if (weight === "" || isNaN(weight)) {
        result.innerHTML = "Error Weight!"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            result.innerHTML = `Under Weight : <span>${bmi}</span>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal : <span>${bmi}</span>`;
        } else {
            result.innerHTML = `Over Weight : <span>${bmi}</span>`;
        }
    }
}

