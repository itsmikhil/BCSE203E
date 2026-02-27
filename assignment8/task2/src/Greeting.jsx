import React from "react";

const Greeting = ({ name, time }) => {
  let message = "";
  if (time < 12) {
    message = "Morning";
  } else if (time < 17) {
    message = "Afternoon";
  } else {
    message = "Evening";
  }
  return (
    name!="" &&
    time!=null && (
      <h1>
        Good {message}, {name}
      </h1>
    )
  );
};

export default Greeting;
