function generate(){
    const url = "https://api.adviceslip.com/advice"
    fetch(url).then((response) => {
        response.json().then((data) => showData(data))
    })
}

function showData(dados){
    const adviceId = dados.slip.id
    const advice = dados.slip.advice

    const showAdvice = document.getElementById('advice-p')
    const showId = document.getElementById('id-p')

    showAdvice.innerHTML = advice
    showId.innerText = `Advice #${adviceId}`
}