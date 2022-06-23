"use strict";
let anyEstadeVolta;
anyEstadeVolta = 3;
anyEstadeVolta = 'teste';
anyEstadeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstadeVolta;
let unknowValor;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'vai sim';
let stringTest2 = 'agora vai';
//  Propriedade do tipo unknow, é obrigatório fazer uma validação para garantir que o tipo inferido é o apropriado para ser definido.
if (typeof unknowValor == 'string') {
    stringTest2 = unknowValor;
}
