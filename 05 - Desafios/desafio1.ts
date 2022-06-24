// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let employee = {
    code: 10,
    name: 'Jhon'
};

let employeeTwo : {code: number, name: string} = {
    code: 10,
    name: 'Jhon'
}

interface Iemplooyee {
    code: number,
    name: string
}

let funcionario : Iemplooyee = {
    code: 200,
    name: 'Jhon'
}

const funcObj = {} as Iemplooyee;
funcObj.code = 77;
funcObj.name = 'Fernando';