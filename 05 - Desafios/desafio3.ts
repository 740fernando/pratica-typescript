// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

enum Constantes{
    SemValor="",
}

let botaoAtualizar = document.getElementById('atualizar-saldo') ;
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let total = 0;

limparSaldo()

function limparSaldo() {
    if(campoSaldo){
        total = 0;
        campoSaldo.innerHTML = total.toString();
    }
}

function somarAoSaldo(soma : number) {
    if(campoSaldo){
       total+=soma;
       campoSaldo.innerHTML = total.toString();
       cleanFieldSum();
    }
}

function cleanFieldSum(){
    soma.value = Constantes.SemValor;
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', () => {
        (campoSaldo)
          ?somarAoSaldo(Number(soma.value))
          :somarAoSaldo(0);
    });   
}

botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
