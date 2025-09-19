import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUp";

const Sign = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-100">
      {/* MOBILE: Single-column form */}
      <div className="flex flex-col lg:hidden w-full h-full justify-center items-center p-4">
        {isSignUp ? (
          <SignUpForm setState={setIsSignUp} />
        ) : (
          <LoginForm setState={setIsSignUp} />
        )}
        <button
          className="mt-4 text-blue-500 underline"
          onClick={() => setIsSignUp(!isSignUp)}
        ></button>
      </div>

      {/* DESKTOP: Two-column sliding panel */}
      <div className="hidden lg:flex w-full h-full relative overflow-hidden">
        {/* Left Panel */}
        <div
          className={`absolute w-1/2 h-full transition-transform duration-700 ${
            isSignUp ? "translate-x-0" : "translate-x-full"
          } flex justify-center items-center`}
        >
          {isSignUp ? (
            <SignUpForm setState={setIsSignUp} />
          ) : (
            <LoginForm setState={setIsSignUp} />
          )}
          <button
            className="mt-4 text-blue-500 underline absolute bottom-10"
            onClick={() => setIsSignUp(!isSignUp)}
          ></button>
        </div>

        {/* Right Panel: Ball / Background */}
        <div
          className={`absolute w-1/2 h-full right-0 transition-transform duration-700 flex justify-center items-center bg-gray ${
            isSignUp ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="w-60 h-60 bg-gradient-to-tr from-black-500 to-gray-500 rounded-full animate-bounce" />
          <div className="w-full h-1/2 absolute bg-blue/10 bottom-0 backdrop-blur-lg" />
        </div>
      </div>
    </div>
  );
};

export default Sign;
