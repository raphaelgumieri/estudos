void main(List<String> args) {
  saudarPessoa(idade: 27, nome: 'Raphael');
  imprimirData(mes: 2, ano: 1945, dia: 19);
}

saudarPessoa({required String nome, required int idade}) {
  print("Olá $nome nem parece que vc tem $idade anos");
}

imprimirData({int dia = 1, int ano = 1970, int mes = 1}) {
  print('$dia/$mes/$ano');
}
