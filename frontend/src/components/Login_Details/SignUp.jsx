const SignUpForm = ({setState}) => {
  return (
    <div className="bg-white px-12 py-2 rounded-3xl border-2 border-gray-200">
      <div className="my-8">
        <h1 className=" font-semibold">Create Account</h1>
      </div>

      <div className="mt-2">
        <div>
          <label className="text-md font-medium">Username</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
            placeholder="Enter your Username"
          />
        </div>
        <div>
          <label className="text-md font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
            placeholder="Enter your Email"
          />
        </div>
        <div>
          <label className="text-md font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
            placeholder="Enter your Password"
            type="password"
          />
        </div>

        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-2.5 rounded bg-violet-800 text-white text-lg font-bold">
            Sign Up
          </button>
        </div>
        <div className="mt-8 flex flex-col gap--1 justify-center items-center">
          <p className="font-medium text-base">Already have an account?</p>
          <button className='text-violet-800 text-base font-medium ml-2'
          onClick={() => {setState(false)}}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
