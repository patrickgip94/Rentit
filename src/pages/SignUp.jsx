/* UTILITIES */
import React, { useState } from "react";

/* ICONS */
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://media0.giphy.com/media/3orif3HlX3i4fDdqCY/giphy.gif?cid=
            ecf05e4795sutpp2yim8hhpkj0s4hq66wc6xragoaqh4w8lb&rid=giphy.gif&ct=g"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full Name"
              className="mb-6 w-full px-4 py-2 text-md text-gray-700 bg-white
              border-gray-300 rounded transition ease-in-out"
            />
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
              className="mb-6 w-full px-4 py-2 text-md text-gray-700 bg-white
              border-gray-300 rounded transition ease-in-out"
            />
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="w-full px-4 py-2 text-md text-gray-700 bg-white
              border-gray-300 rounded transition ease-in-out"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
              <p>At least 8 characters</p>
            </div>
            <div className="flex justify-between whitespace-nowrap text-md sm:text-md ">
              <p className="mb-6">
                Have an account?
                <Link
                  to="/sign-in"
                  className="text-green-600 hover:text-green-500 transition 
                  duration-200 ease-in-out ml-1 font-bold hover:border-b border-b-green-500"
                >
                  Sign In
                </Link>
              </p>
              <p>
                <Link
                  to="/forgot-password"
                  className="text-blue-700 hover:text-blue-500 transition 
                  duration-200 ease-in-out ml-1 font-bold hover:border-b border-b-blue-500"
                >
                  Forgot your password?
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-bold 
              uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 
              ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Submit
            </button>
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

export default SignUp;
