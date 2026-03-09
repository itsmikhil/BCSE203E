import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  return (
    <main>
      <h3>{count!=0 && count}</h3>
      <button onClick={() => setcount((prev) => prev + 1)}>Click Me</button>
    </main>
  );
};

export default App;
