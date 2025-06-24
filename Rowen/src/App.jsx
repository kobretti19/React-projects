import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function hadnleCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="bg-gray-400">
      <h1>{count}</h1>
      <button
        className="bg-amber-200 rounded-xl px-4 py-2"
        onClick={hadnleCount}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
