import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  // componentDidUpdate
  useEffect(() => {
    console.log('ComponentDidUpdate');
  });

  // componentDidMount
  useEffect(() => {
    console.log('ComponentDidMount');
  }, []);

  // com dependencia - executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log(`contador mudou para ${counter}`);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
