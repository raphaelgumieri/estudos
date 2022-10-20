import 'dart:math';

void main(List<String> args) {
  int resultado = somar(2, 3);
  print('o resultado de somar é: $resultado');

  int resultado2 = somarNmrsAleatorios();
  print('o resultado de somarNmrsAleatorios é: $resultado2');
}

int somar(int a, int b) {
  return a + b;
}

int somarNmrsAleatorios() {
  int a = Random().nextInt(11);
  int b = Random().nextInt(11);
  return a + b;
}
