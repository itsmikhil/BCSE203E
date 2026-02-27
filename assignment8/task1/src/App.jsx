import React from "react";
import Greetings from "./Greetings";

const App = () => {
  return (
    <>
      <Greetings name={"Ram"} time={"Morning"} />
      <Greetings name={"Shyam"} time={"Afternoon"} />
      <Greetings name={"Lakshman"} time={"Evening"} />
    </>
  );
};

export default App;
