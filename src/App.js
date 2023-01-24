import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "../src/pages/ForgotPassword";
import Home from "../src/pages/Home";
import Offers from "../src/pages/Offers";
import Profile from "../src/pages/Profile";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
