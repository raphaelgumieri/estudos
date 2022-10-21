import 'package:despesas_pessoais/components/transaction_user.dart';
import 'package:flutter/material.dart';

main() => runApp(ExpensessApp());

class ExpensessApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Despesas Pessoais'),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Card(
            color: Colors.blue,
            elevation: 5,
            child: Text('Gráfico'),
          ),
          TransactionUser(),
        ],
      ),
    );
  }
}
