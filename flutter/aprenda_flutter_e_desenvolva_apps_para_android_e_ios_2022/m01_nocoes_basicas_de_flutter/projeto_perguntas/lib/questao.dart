import 'package:flutter/material.dart';

class Questao extends StatelessWidget {
  final String texto;

  Questao(this.texto);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      margin: EdgeInsets.all(10),
      child: Text(
        texto,
        style: TextStyle(fontSize: 28),
        textAlign: TextAlign.center,
      ),
    );
  }
}


// O segundo caso, na aula seguinte, acontece lá no for:

// for (String textoResp in perguntas[_perguntaSelecionada].cast()['respostas']) {
//       respostas.add(Resposta(textoResp, _responder));
//     }
// Basta adicionar as duas funções, cast() e toString() e tudo funcionará certinho!

// Bons estudos!