void main(List<String> args) {
  juntar(1, 9);
  juntar('Bom ', 'dia');
  juntar('O valor de PI é ', 3.1415);
}

dynamic juntar(dynamic a, dynamic b) {
  print(a.toString() + b.toString());
  return a.toString() + b.toString();
}
