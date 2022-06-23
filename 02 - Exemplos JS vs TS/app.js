"use strict";
let valorAny;
valorAny = 1;
valorAny = "ola";
valorAny = true;
valorAny = 2;
let value = 'test';
value = valorAny;
let valueString = 'big test';
valueString = value;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(value, valueString);
