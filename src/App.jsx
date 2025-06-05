import "./App.css";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Landingscreen from "./components/Landingscreen";
import Loginscreen from "./components/Loginscreen";
import Signupscreen from "./components/Signupscreen";
import Profile from "./components/Profile";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landingscreen />} />
        <Route path="/sign-in" element={<Loginscreen />} />
        <Route path="/sign-up" element={<Signupscreen />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;