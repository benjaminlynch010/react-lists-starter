import { useState } from 'react';
import './App.css';

function App() {
  const [creatureList, setCreatureList] = useState([
    { name: 'Unicorn', origin: 'Britain' },
    { name: 'Sphinx', origin: 'Egypt' },
    { name: 'Jackalope', origin: 'America' }
  ])

  return (
    <>
      <header className="Header">
        <h1>React Mythical Creatures</h1>
      </header>
      <div className="App">
        <div>
          Splatting to the DOM looks like this:
          <pre>
            {/* We can use JSON.stringify() to dump raw data into our DOM */}
            {JSON.stringify(creatureList)}
          </pre>
        </div>
      </div>
    </>
  );
}

export default App;
