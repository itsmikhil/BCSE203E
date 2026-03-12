import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {

  const { user } = useContext(UserContext);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Navbar</h2>
      <p>Current User: {user}</p>
    </div>
  );
}

export default Navbar;