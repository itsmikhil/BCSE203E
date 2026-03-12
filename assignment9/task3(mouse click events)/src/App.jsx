import React, { useState } from "react";

const App = () => {
  const [text, settext] = useState("Click Me");
  return (
    <div className="main">
      <button
        onClick={() => settext("Submit")}
        onDoubleClick={() => settext("Back!")}
      >
        {text}
      </button>
    </div>
  );
};

export default App;
