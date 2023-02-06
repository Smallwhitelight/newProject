const result = document.querySelector('.outputText')
const data = []
const formElement = document.querySelector('.forma');
const input_Credit = document.querySelector('.forma1')
const result_sum = document.querySelector('.outputCredit')
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const name = formData.get('nume');
    const ras = formData.get('rasa');
    const age = formData.get('varsta');
    data.push({nume: name,rasa:ras,varsta:age})
    result.textContent = `Numele cainelui tau este ${data[data.length-1].nume} de rasa ${data[data.length-1].rasa} cu varsta ${(data[data.length-1].varsta) * 7}`
    });

input_Credit.addEventListener('submit',(e)=>{
    e.preventDefault()

    const formDataCredit = new FormData(input_Credit);
    const sum = formDataCredit.get('suma')
    const rate = (formDataCredit.get('rata')) / 100
    const perioada = (formDataCredit.get('period'))
    let monthInterestRate = rate / 12;
    let n1 = Math.pow(1 + monthInterestRate, perioada);
    let numarator = sum * n1 * monthInterestRate;
    let numitor = n1 - 1;
    monthRate = +(numarator / numitor).toFixed(2)
    monthRate = Math.floor((numarator / numitor) * 100) / 100;
    let final_sum = monthRate;
    for (let i = 1; i <= (+perioada + 1); i++) {
        /*console.log('sum',final_sum);
        console.log('per',perioada);
        console.log('i',i);*/
        final_sum += monthRate
        const p = document.createElement('p')
        input_Credit.append(p)
        if(i <= (+perioada)){
            p.textContent = `Rata lunara pentru ${i} este ${monthRate} lei`
        }
        if(i === +perioada + 1){

            p.textContent = `Total spre achitare: ${+final_sum.toFixed(2)} lei`
        }
    }
})





