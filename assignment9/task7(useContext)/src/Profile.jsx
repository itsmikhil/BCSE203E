import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {

  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>

      <p>Welcome: {user}</p>

      <button onClick={login}>Login</button>
      <button onClick={logout} style={{ marginLeft: "10px" }}>
        Logout
      </button>
    </div>
  );
}

export default Profile;