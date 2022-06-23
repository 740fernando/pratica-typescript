let anyEstadeVolta : any;
anyEstadeVolta = 3;
anyEstadeVolta = 'teste'
anyEstadeVolta = 5;

let stringTest: string = 'verificar'
stringTest = anyEstadeVolta;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'vai sim';

let stringTest2: string = 'agora vai';
//  Propriedade do tipo unknow, é obrigatório fazer uma validação para garantir que o tipo inferido é o apropriado para ser definido.
if(typeof unknowValor == 'string'){
    stringTest2 = unknowValor;
}
