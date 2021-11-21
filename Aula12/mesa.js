const alicia = [23, 69, 32]
const bob = [12, 67, 43]


function encontrarGanhador(a, b) {
  let pontosPrimeiroParticipante = 0
  let pontosSegundoParticipante = 0

  for (let i = 0; i < b.length; i++) {
    if (a[i] > b[i]) {
      return pontosPrimeiroParticipante++
    } else if (a[i] < b[i]) {
      return pontosSegundoParticipante++
    }
  }

  if (pontosPrimeiroParticipante > pontosSegundoParticipante) {
    return 'Primeiro Participante'
  } else if (pontosSegundoParticipante > pontosPrimeiroParticipante) {
    return 'Segundo Participante'
  } else {
    return 'Empate'
  }
}

console.log('O ganhador é: ' + encontrarGanhador(alicia, bob))