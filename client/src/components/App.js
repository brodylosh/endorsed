import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/hello')
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/testing" element={<h1>Testing</h1>} />
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </div>
  );
}

export default App;
