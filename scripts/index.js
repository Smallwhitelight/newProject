const input = document.querySelectorAll('.iner')
const btn = document.querySelector('.btn')
const result = document.querySelector('.outputText')
const data = []
const formElement = document.querySelector('.forma');

// извлекаем элемент формы
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const name = formData.get('nume');
    const ras = formData.get('rasa');
    const age = formData.get('varsta');
    data.push({nume: name,rasa:ras,varsta:age})
    result.textContent = `Numele cainelui tau este ${data[data.length-1].nume} de rasa ${data[data.length-1].rasa} cu varsta ${(data[data.length-1].varsta) * 7}`
    });





