import 'package:flutter/material.dart';

class Resposta extends StatelessWidget {
  final void Function() quandoSelecionado;
  final String texto;
  Resposta(this.quandoSelecionado, this.texto);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.purple,
        ),
        onPressed: quandoSelecionado,
        child: Text(texto),
      ),
    );
  }
}
