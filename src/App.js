/* UTILITIES */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* PAGES */
import ForgotPassword from "../src/pages/ForgotPassword";
import Home from "../src/pages/Home";
import Offers from "../src/pages/Offers";
import Profile from "../src/pages/Profile";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";
import TermOfUse from "./pages/Terms";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import EditListing from "./pages/EditListing";

/* COMPONENTS */
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
          <Route path="/terms" element={<TermOfUse />} />
          <Route path="/create-listings" element={<PrivateRoute />}>
            <Route path="/create-listings" element={<CreateListing />} />
          </Route>
          <Route path="/edit-listing" element={<PrivateRoute />}>
            <Route path="/edit-listing/:listingId" element={<EditListing />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
