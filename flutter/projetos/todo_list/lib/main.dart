import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class TypeAndItem {
  String type;
  String item;
  TypeAndItem({required this.type, required this.item});
}

List<TypeAndItem> TypeAndItemList = [];

void tempFunc() {
  TypeAndItemList.add(TypeAndItem(type: 'sou o tipo', item: 'sou o item'));
  print(TypeAndItemList.first);
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: TodoList(),
    );
  }
}

class TodoList extends StatefulWidget {
  TodoList({Key? key}) : super(key: key);

  @override
  State<TodoList> createState() => _TodoListState();
}

class _TodoListState extends State<TodoList> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Container(
        margin: const EdgeInsets.fromLTRB(20, 70, 20, 20),
        child: Column(
          children: [
            const Text(
              'Olá Raphael',
              style: TextStyle(
                fontSize: 30,
              ),
            ),
            const SizedBox(
              height: 5,
            ),
            const Align(
              alignment: Alignment.topLeft,
              child: Text(
                'Sexta, 24 de junho',
                textAlign: TextAlign.left,
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  color: Colors.blue.shade50,
                  margin: EdgeInsets.only(left: 20),
                  child: Text(
                    'x tarefas\ncompletas',
                    style: TextStyle(fontSize: 20),
                  ),
                ),
                Container(
                  color: Colors.blue.shade50,
                  margin: EdgeInsets.only(right: 20),
                  child: Text(
                    'x tarefas\ncompletas',
                    style: TextStyle(fontSize: 20),
                  ),
                )
              ],
            ),
            GridView.count(
              // primary: false,
              padding: const EdgeInsets.all(20),
              crossAxisSpacing: 10,
              mainAxisSpacing: 10,
              crossAxisCount: 2,
              shrinkWrap: true,
              children: <Widget>[
                Container(
                  padding: const EdgeInsets.all(8),
                  color: Colors.yellow.shade100,
                  child: TextButton(
                    onPressed: tempFunc,
                    child: const Text('Pessoal'),
                  ),
                ),
                Container(
                  padding: const EdgeInsets.all(8),
                  color: Colors.yellow.shade100,
                  child: TextButton(
                    onPressed: tempFunc,
                    child: const Text('Trabalho'),
                  ),
                ),
                Container(
                  padding: const EdgeInsets.all(8),
                  color: Colors.yellow.shade100,
                  child: TextButton(
                    onPressed: tempFunc,
                    child: const Text('Lista de compras',
                        textAlign: TextAlign.center),
                  ),
                ),
                Container(
                  padding: const EdgeInsets.all(8),
                  color: Colors.yellow.shade100,
                  child: TextButton(
                    onPressed: tempFunc,
                    child: const Text('Estudo'),
                  ),
                ),
              ],
            ),
            IconButton(
              onPressed: tempFunc,
              icon: const Icon(
                Icons.add_circle_outline,
                size: 50,
              ),
            )
          ],
        ),
      ),
    );
  }
}
