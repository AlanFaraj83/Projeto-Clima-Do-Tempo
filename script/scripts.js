

const key = "455417a5d6ff4161bfce1b2a49bf66d1"

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".headline-cidade").innerHTML= "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML= dados.main.temp
    document.querySelector(".texto-clima").innerHTML= dados.weather[0].description


}


async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    
    colocarDadosNaTela(dados)    

}

function ClicarNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}