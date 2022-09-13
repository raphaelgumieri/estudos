class Produto {
  late String nome;
  late double preco;

  Produto(this.nome, this.preco)

  // Produto({required this.nome, required this.preco}) 
  // colocar os {} transforma em parametro nomeado, sendo obrigado a passar o nome do item que vc esta passando
  // Produto(String nome, double preco) {
  //   this.nome = nome;
  //   this.preco = preco;
  // }
}

main() {
  var p1 = Produto('lapis', 4.99);
  var p2 = Produto('geladeira', 1454.99);
  // exemplo usando parametro nomeado
  // var p1 = Produto(nome: 'Lapis', preco: 4.99);
  // var p2 = Produto(nome: 'Geladeira', preco: 1454.99);

  print("o produto ${p1.nome} tem preço ${p1.preco}");
  print("o produto ${p2.nome} tem preço ${p2.preco}");
}
