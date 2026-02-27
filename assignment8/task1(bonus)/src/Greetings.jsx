import React from "react";

const Greetings = ({ name, time }) => {
  let message = "";
  if (time < 12) {
    message = "Morning";
  } else if (time < 17) {
    message = "Afternoon";
  } else {
    message = "Evening";
  }
//    style in index.css
  return (
    <div className="greeting">
      Good {message}, {name}
    </div>
  );
};

export default Greetings;
