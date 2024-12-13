import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";
import Loader from "./Loader";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, googleSignIn, loading } = useAuth();

  useEffect(() => {
    if (user) {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [user, navigate, location]);

  const handleLogin = async () => {
    try {
      await googleSignIn();
      toast.success("Login successful!");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <Loader />
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      <div className="flex flex-wrap justify-center gap-2 px-4 py-4 w-50">
        <div className="flex flex-col gap-2">
          <img src={img1} alt="img1" className="object-cover w-full h-36" />
          <img src={img2} alt="img2" className="object-cover w-full h-36" />
          <img src={img3} alt="img3" className="object-cover w-full h-36" />
        </div>

        <div className="flex flex-col gap-2">
          <img src={img4} alt="img4" className="object-cover w-full h-20" />
          <img src={img5} alt="img5" className="object-cover w-full h-36" />
          <img src={img6} alt="img6" className="object-cover w-full h-36" />
        </div>

        <div className="flex flex-col gap-2">
          <img src={img7} alt="img7" className="object-cover w-full h-36" />
          <img src={img8} alt="img8" className="object-cover w-full h-36" />
          <img src={img9} alt="img9" className="object-cover w-full h-36" />
        </div>
      </div>

      <div className="mt-[-75px] bg-white p-[29px] pb-20 rounded-tl-3xl rounded-tr-3xl shadow-lg">
        <div className="flex items-center justify-center mb-3">
          <img src={img10} className="object-cover w-12 h-12" alt="logo" />
          <h1 className="text-xl font-bold text-gray-800 ml-2">Vibesnap</h1>
        </div>
        <p className="text-gray-500 text-center mb-4">
          Moments That Matter, Shared Forever.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="h-5 w-5"
            />
            Continue with Google
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
