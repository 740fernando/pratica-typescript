let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

function adicionarNumeros(numero1: number,numero2: number){
    return numero1 + numero2;
}

if(button) {
    button.addEventListener('click', ()=>{
        if(input1 && input2){
            adicionarNumeros(Number(input1.value),Number(input2.value))
        }
    })
}