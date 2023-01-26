/* UTILITIES */
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";

/* ICONS */
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

/* COMPONENTS */
import OAuth from "../components/OAuth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Woohoo! Password reset on the way! 🥳");
    } catch (error) {
      toast.error("Could not send reset password");
    }
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password?</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-8 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?w=2000"
            alt="key"
            className="w-full rounded-2xl py-6"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
              className="mb-6 w-full px-4 py-2 text-md text-gray-700 bg-white
              border-gray-300 rounded transition ease-in-out"
            />
            <div className="flex justify-center whitespace-nowrap text-md sm:text-md ">
              <p className="mb-6 font-light">
                Don't have an account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-500 transition 
                  duration-200 ease-in-out ml-1 font-bold hover:border-b border-b-red-500"
                >
                  Register
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-bold 
              uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 
              ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Send reset password
            </button>
            <p className="flex justify-center py-2 text-md font-light">
              Know your password?
              <Link
                to="/forgot-password"
                className="text-blue-500 border-b border-b-blue-500 hover:text-blue-600 transition 
                  duration-200 ease-in-out ml-1 font-bold"
              >
                Sign in
              </Link>
            </p>
            <div
              className="flex  items-center my-4 before:border-t before:flex-1 
          before:border-gray-300 after:border-t after:flex-1 
          after:border-gray-300"
            >
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
