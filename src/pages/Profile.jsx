/* UTILITIES */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { db } from "../firebase";
import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

/* ICONS */
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  // Makes changes within the Database
  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // 1st: update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // 2nd: update name in the firestore

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("Profile details updated!");
    } catch (error) {
      toast.error("Could not update the profile");
    }
  };
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* NAME INPUT */}
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              onChange={onChange}
              className="mb-6 w-full px-4 py-2 text-xl
            text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            {/* EMAIL INPUT */}
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl
            text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <div
              className="flex justify-between items-center whitespace-nowrap
              text-sm sm:text-lg mb-6"
            >
              <p className="flex items-center">
                Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-500 hover:text-red-700 cursor-pointer 
                  transition ease-in-out duration-200 ml-1"
                >
                  {changeDetail ? "Apply Change" : "Edit"}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-400 cursor-pointer transition 
                ease-in-out duration-200"
              >
                Sign Out
              </p>
            </div>
          </form>

          <button
            type="submit"
            className="w-full bg-blue-500 rounded text-white uppercase
            px-7 py-3 text-sm font-bold shadow-md hover:bg-blue-700 transition 
            duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
          >
            <Link
              to="/create-listing"
              className="flex justify-center items-center "
            >
              <FcHome className="mr-2 text-3xl bg-red-200 rounded-full p-1 border-2" />
              Rent your home
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Profile;
