import { useState } from "react";
import { authStore } from "../../store/authStore";
import LoadingSpinner from "../LoadingSpinner";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const { signup, error, isLoading } = authStore();


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await signup(email, password, username);
      navigate("/verify-email");
    } catch (err) {
      console.log(error);
    }
    
  };
  return (
    <div className="bg-white px-12 py-2 rounded-3xl border-2 border-gray-200">
      <div className="my-8">
        <h1 className=" font-semibold">Create Account</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <div>
            <label className="text-md font-medium">Username</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
              placeholder="Enter your Username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="text-md font-medium">Email</label>
            <input
            type="email"
              className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
              placeholder="Enter your Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-md font-medium">Password</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
              placeholder="Enter your Password"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-8 flex flex-col gap-y-4">
            <button
              className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-2.5 rounded bg-violet-800 text-white text-lg font-bold flex items-center justify-center"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <LoadingSpinner className="animate-spin mx-auto" size={24} />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
          {error && <p className=""> {error}</p>}

          <div className="mt-8 flex flex-col gap--1 justify-center items-center">
            <p className="font-medium text-base">Already have an account?</p>
            <span
              className="text-violet-800 text-base font-medium ml-2"
              type="button"
              onClick={() => {
                setState(false);
              }}
            >
              Sign In
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
