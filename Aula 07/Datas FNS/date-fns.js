const { format, parse, add, addBusinessDays, differenceInDays, set } = require("date-fns")
const data = new Date(1997, 5, 27, 22)
const dataFormatada = format(data, "dd/MM/yy")
const data1 = parse("27/06/1997", "dd/MM/yyyy", new Date())

console.log(dataFormatada);
console.log(data1);
console.log(add(data, {
    years: 10
}));
console.log(addBusinessDays(data, 10));