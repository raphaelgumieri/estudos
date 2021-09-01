"use strict";
var input1 = document.getElementById("num1"); // digo que nosso input é do tipo input
var input2 = document.getElementById("num2");
var button = document.getElementById("button");
var sum = function (a, b) { return a + b; }; // declaro que tipo a e b recebem, não preciso tipar o resultado, pq number + number = number. Ts não é burro
button.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
// para compilar:
// npx tsc nome_do_arquivo.js --watch
