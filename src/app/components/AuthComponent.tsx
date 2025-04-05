"use client";
import { useState } from "react";
import Image from 'next/image'
import { useAuthContext } from "../../../context/AuthContext";

export default function AuthComponent() {
  const { user, login, logout } = useAuthContext();
  const [imageIndex, setImageIndex] = useState(0);

  const loginImages = [
    "/9.jpg",
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg"
  ];

  const logoutImages = [
    "/10.jpeg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg"
  ];

  const handleImageClick = (isLoggedIn: null) => {
    const images = isLoggedIn ? logoutImages : loginImages;
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6">
        <div className="flex justify-center">
          <Image
            src={user ? logoutImages[imageIndex] : loginImages[imageIndex]}
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full border-4 border-blue-600 object-cover mb-4 cursor-pointer"
            onClick={() => handleImageClick(user)}
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800">
          {user ? `Welcome, ${user.name}!` : "Please Log In"}
        </h2>

        <div className="text-center">
          {!user ? (
            <>
              <button
                onClick={() => login("Rana Rabees")}
                className="w-full py-3 mt-6 bg-blue-600 text-white text-xl font-semibold rounded-md hover:bg-blue-700 transition duration-300"
              >
                Log In
              </button>
              <p className="mt-4 text-gray-500">Click to log in as Rana Rabees</p>
            </>
          ) : (
            <>
              <button
                onClick={logout}
                className="w-full py-3 mt-6 bg-red-600 text-white text-xl font-semibold rounded-md hover:bg-red-700 transition duration-300"
              >
                Log Out
              </button>
              <p className="mt-4 text-gray-500">Click to log out</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
