const input1 = document.getElementById("num1") as HTMLInputElement; // digo que nosso input é do tipo input
const input2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("button")!;

const sum = (a: number, b: number) => a + b; // declaro que tipo a e b recebem, não preciso tipar o resultado, pq number + number = number. Ts não é burro

button.addEventListener("click", () => {
  console.log(sum(Number(input1.value), Number(input2.value)));
});

// para compilar:
// npx tsc nome_do_arquivo.js --watch