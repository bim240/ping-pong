const { default: PingPong } = require('Containers/PingPong');

function App() {
  console.log('testing pre commit ');
  return (
    <div className="App">
      <PingPong />
    </div>
  );
}

export default App;
