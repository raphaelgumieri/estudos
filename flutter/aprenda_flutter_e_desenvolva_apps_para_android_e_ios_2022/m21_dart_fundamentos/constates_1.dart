import 'dart:io';
import 'dart:math';

void main() {
  // área da circuferência = PI * raio * raio
  const double pi =
      3.1415; // a diferença de const e final é que const o valor já é definido ANTES do runtime. Ou seja, o programa já sabe qual o valor de const antes de rodar.
  stdout.write('Informe o raio: ');
  String entradaDoUsuario = stdin.readLineSync()!;
  final double raio = double.parse(
      entradaDoUsuario); // coloca final quando sabe que o valor não vai ser alterado.
  final area = pi * pow(raio, raio);
  print('o valor da área é: ${area}');
}
