let valorAny: any;
valorAny = 1;
valorAny = "ola";
valorAny = true;
valorAny=2;

let value: string = 'test';
value = valorAny;
let valueString : string = 'big test';
valueString = value;

function somarString(string1: string, string2: string){
    console.log(string1 + string2);
}

somarString(value, valueString);