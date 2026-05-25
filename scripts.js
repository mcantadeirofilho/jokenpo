const result = document.querySelector('.result')
const humanPoint = document.querySelector('.human-score')
const machinePoint = document.querySelector('.alexa-score')
const popup = document.querySelector('.popup')
const novaGuia = ""

let humanScore = 0
let machineScore = 0

const playHuman = (humanChoice) => {
       result.innerHTML = ""
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + " - Máquina: " + machine)

    if (human === machine) {

       result.innerHTML = "Empatou!!!"
        humanScore ++
        machineScore ++        
        humanPoint.innerHTML = humanScore
        machinePoint.innerHTML = machineScore
       console.log('empate')
    } else if ((human === 'rock' && machine === 'scissors') || (human === 'paper' && machine === 'rock') || (human === 'scissors' && machine === 'paper')) {
        result.innerHTML = "Muito bem!!! Você ganhou!!!"
        humanScore ++
        humanPoint.innerHTML = humanScore
        console.log('humano ganha')
    } else {

        result.innerHTML = "Você perdeu para Alexa!!!"
        machineScore ++
        machinePoint.innerHTML = machineScore
        console.log('Alexa ganhou!!!')
    }

    if (humanScore === 10) {
        result.innerHTML = "Parabéns!!!" + "<br>" + " Você fez 10 Pontos" + "<br>" + " Você venceu a Alexa!!!" + "<br>" + " Escolha para iniciar outro Jogo!!!"

        setTimeout(() => {
        console.log("Executando após 10 segundos...");
        
        popup = document.getElementById('meuPopup').style.display = 'flex'

  // Coloque seu código aqui
    }, 5000); // 5000 ms = 5 segundos

        humanScore = 0
        machineScore = 0
        humanPoint.innerHTML = humanScore
        machinePoint.innerHTML = machineScore

    } else if (machineScore === 10) {
        result.innerHTML = "Infelizmente Alexa fez 10 Pontos!"+ "<br>" + " Você perdeu para a Alexa!!!" + "<br>" + " Tente a Sorte na Próxima!!!"

        setTimeout(() => {
        console.log("Executando após 10 segundos...");
        
        popup = document.getElementById('meuPopup').style.display = 'flex'

  // Coloque seu código aqui
    }, 3000); // 3000 ms = 3 segundos

        humanScore = 0
        machineScore = 0
        humanPoint.innerHTML = humanScore
        machinePoint.innerHTML = machineScore
      
    }

}
    function acaoSim() {
      alert("OK, vamos jogar novamente!");
      popup = document.getElementById("meuPopup").style.display = "none";
    }

    function acaoNao() {

/*         alert("Até a próxima, boa sorte!");
        
 */     
        novaGuia = window.open("https://www.google.com", "_parent");
        popup = document.getElementById("meuPopup").style.display = "none";
    fimDeJogo()
    }

function fimDeJogo() {
    // Redireciona após 3 segundos
    setTimeout(function() {
        window.location.href = ("https://www.google.com","_self");
    }, 3000);
}
/* stone()
paper()
scissors()*/
/* const max = 3
const stone = 1
const paper = 2
const scissors = 3 */



