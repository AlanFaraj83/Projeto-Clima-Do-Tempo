

const key = "455417a5d6ff4161bfce1b2a49bf66d1"


async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`)
    

}

function ClicarNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}