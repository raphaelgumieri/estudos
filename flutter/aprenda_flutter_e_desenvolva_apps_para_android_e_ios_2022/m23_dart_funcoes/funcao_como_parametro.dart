import 'dart:math';

void main() {
  var minhaFnPar = () => print('O valor é par');
  var minhaFnImpar = () => print('O valor é impar');

  executar(minhaFnPar, minhaFnImpar);
}

void executar(Function fnPar, Function fnImpar) {
  Random().nextInt(10) % 2 == 0 ? fnPar() : fnImpar();
}
