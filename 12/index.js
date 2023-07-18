let montante = 90000
let capital = 60000
let numeroDeMeses = 24
const potencia = Math.pow(montante, 1 / numeroDeMeses)
const taxaDeJuros = (potencia / capital) - 1
console.log(`O seu financiamento de 60000 reais teve uma taxa de juros de ${taxaDeJuros}%, pois após 24 meses você teve que pagar 90000 reais`)