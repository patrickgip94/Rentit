import React, { useState } from "react";

/* ICONS */
import { GoHome } from "react-icons/go";
import { BsBuilding } from "react-icons/bs";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: "rent",
    owner: "landlord",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    homePrice: 0,
    discountedPrice: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    owner,
    address,
    description,
    offer,
    homePrice,
    discountedPrice,
  } = formData;

  const onChange = () => {};
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form>
        <p className="text-lg mt-6 mb-3 font-semibold">Sell/ Rent</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sell"
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-semibold text-sm uppercase shadow-md rounded-md 
              hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 
              ease-in-out w-full ${
                type === "rent"
                  ? "bg-white text-black"
                  : "bg-blue-600 text-white"
              }`}
          >
            sell
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-semibold text-sm uppercase shadow-md rounded-md 
              hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 
              ease-in-out w-full ${
                type === "sell"
                  ? "bg-white text-black"
                  : "bg-blue-600 text-white"
              }`}
          >
            rent
          </button>
        </div>

        <h1 className="mt-6 font-bold text-2xl">
          First, tell us about yourself
        </h1>
        <p className="text-md mt-6 mb-3 font-semibold">What's your name?</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300
            transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white
            focus:border-slate-600 mb-6"
        />

        <div>
          <p className="mb-3">What best describes why you are here today?</p>
          <div className="flex">
            <button
              type="button"
              id="owner"
              value="landlord"
              onClick={onChange}
              className={`flex mr-3 px-7 py-3 items-center font-semibold text-sm uppercase shadow-md rounded-md 
              hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 
              ease-in-out w-full ${
                owner === "propertyManager"
                  ? "bg-white text-black"
                  : "bg-blue-600 text-white"
              }`}
            >
              <GoHome className="items-center mr-3 text-lg" />
              Landlord
            </button>
            <button
              type="button"
              id="owner"
              value="propertyManager"
              onClick={onChange}
              className={`flex items-center mr-3 px-7 py-3 font-semibold text-sm uppercase shadow-md rounded-md 
              hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 
              ease-in-out w-full ${
                owner === "landlord"
                  ? "bg-white text-black"
                  : "bg-blue-600 text-white"
              }`}
            >
              <BsBuilding className="items-center text-lg" />
              Property Manager
            </button>
          </div>
        </div>
        <p className="mt-6 mb-3">How many bedrooms does your property have?</p>
        <div className="flex space-x-6 mb-6">
          <div className="">
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300
              transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white
              focus:border-slate-600 rounded"
            />
          </div>
          <div className="">
            <p className="text-lg font-semibold">Bathrooms</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300
              transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white
              focus:border-slate-600 rounded"
            />
          </div>
        </div>

        <p className="text-lg mt-6 mb-3 font-semibold">Parking spot</p>
        <div className="flex">
          <button
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-semibold text-sm uppercase shadow-md rounded-md 
              hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 
              ease-in-out w-full ${
                !parking ? "bg-white text-black" : "bg-blue-600 text-white"
              }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-semibold text-sm uppercase shadow-md rounded-md 
              hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 
              ease-in-out w-full ${
                parking ? "bg-white text-black" : "bg-blue-600 text-white"
              }`}
          >
            No
          </button>
        </div>
        <p className="text-lg mt-6 mb-3 font-semibold">Furnished?</p>
        <div className="flex">
          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-semibold text-sm uppercase shadow-md rounded-md 
              hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 
              ease-in-out w-full ${
                !furnished ? "bg-white text-black" : "bg-blue-600 text-white"
              }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-semibold text-sm uppercase shadow-md rounded-md 
              hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 
              ease-in-out w-full ${
                furnished ? "bg-white text-black" : "bg-blue-600 text-white"
              }`}
          >
            No
          </button>
        </div>
        <p className="text-md mt-6 mb-3 font-semibold">
          What's the property address?
        </p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full px-4 py-2 text-md text-gray-700 bg-white border border-gray-300
            transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white
            focus:border-slate-600 mb-6"
        />
        <p className="text-md mb-3 font-semibold">Property Details</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Property Overview"
          required
          className="w-full px-4 py-2 text-md text-gray-700 bg-white border border-gray-300
            transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white
            focus:border-slate-600 mb-6"
        />
        <p className="text-lg mb-3 font-semibold">Offer?</p>
        <div className="flex mb-6">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-semibold text-sm uppercase shadow-md rounded-md 
              hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 
              ease-in-out w-full ${
                !offer ? "bg-white text-black" : "bg-blue-600 text-white"
              }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-semibold text-sm uppercase shadow-md rounded-md 
              hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 
              ease-in-out w-full ${
                offer ? "bg-white text-black" : "bg-blue-600 text-white"
              }`}
          >
            No
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold">Home Price</p>
            <div className="flex w-full items-center justify-center space-x-6 ">
              <input
                type="number"
                id="homePrice"
                value={homePrice}
                onChange={onChange}
                min="50"
                max="400000000"
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white 
                border border-gray-300 rounded transition duration-150 ease-in-out 
                focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
              {type === "rent" && (
                <div className="">
                  <p className="text-md w-full whitespace-nowrap font-bold text-blue-700">
                    $ / Month
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold">Price Drop?</p>
              <div className="flex w-full items-center justify-center space-x-6 ">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min="50"
                  max="400000000"
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white 
                        border border-gray-300 rounded transition duration-150 ease-in-out 
                        focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                />
                {type === "rent" && (
                  <div className="">
                    <p className="text-md w-full whitespace-nowrap font-bold text-red-700">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="text-lg font-semibold">Upload Images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg, .png, .jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border
          border-gray-300 rounded transition duration-150 ease-in-out
            focus:bg-white focus:border-slate-600"
          />
        </div>
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 shadow-md hover:bg-blue-700 
          text-white font-semibold text-md uppercase rounded-full hover:shadow-lg focus:bg-blue-700
            focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150
            ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
};

export default CreateListing;
