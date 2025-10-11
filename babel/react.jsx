import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="app">
      <h1>Hello, {name || 'World'}!</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
      <input 
        type="text" 
        value={name} 
        onChange={handleNameChange} 
        placeholder="Enter your name"
      />
      {count > 5 && <p>You've clicked more than 5 times!</p>}
    </div>
  );
}

export default App;