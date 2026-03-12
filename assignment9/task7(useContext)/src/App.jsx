import { UserProvider } from "./UserContext";
import Navbar from "./Navbar";
import Profile from "./Profile";

function App() {
  return (
    <UserProvider>
      <div style={{ padding: "30px" }}>
        <h1>useContext Example</h1>
        <Navbar />
        <Profile />
      </div>
    </UserProvider>
  );
}

export default App;