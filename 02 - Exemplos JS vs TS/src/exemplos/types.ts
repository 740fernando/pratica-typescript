type input = number | string;

function somarValores(input1: number | string, input2: number | string) {
    return (typeof input1 === "string" || typeof input2 === 'string')
        ? input1.toString() + input2.toString()
        : input1+input2;
}

console.log(somarValores(1,5));
console.log(somarValores('ola', ', tudo bem?'));
console.log(somarValores('Combina tipos String e number: ',5));