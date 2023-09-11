const dataFinalCopa = new Date(2002, 5, 30, 8, 0)
const tsInicioDoJogo = +dataFinalCopa
const tsTempos = 45000 * 60
const intervalo = 15000 * 60


const primeiroGol = tsInicioDoJogo + tsTempos + intervalo + 22000 * 60
const segundoGol = tsInicioDoJogo + tsTempos + intervalo + 34000 * 60
console.log(+dataFinalCopa);
const dataPrimeiroGol = new Date(primeiroGol)
console.log(dataPrimeiroGol);
const dataSegundoGol = new Date(segundoGol)
console.log(dataSegundoGol);