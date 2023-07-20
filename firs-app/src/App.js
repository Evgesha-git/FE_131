import { useState } from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  const [flag, setFlag] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => setFlag(!flag)}
        style={{
          background: !flag ? 'red' : 'green',
          borderRadius: '5px',
          border: 'none',
          padding: '5px 10px',
        }}
      >
        {flag ? (<span>&#9873;</span>) : (<span>&#9872;</span>)}
      </button>
      {flag ? <FunctionalComponent num={5} /> : null}
      {flag ? <ClassComponent num={10} /> : null}
    </div>
  );
}

export default App;
