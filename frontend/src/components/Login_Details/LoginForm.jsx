const LoginForm = ({setState}) => {
  return (
    <div className="bg-white px-12 py-2 rounded-3xl border-2 border-gray-200">
      <form method='post' action='http://localhost:3000/login/signIn'>
      <div className="my-8">
        <h1 className=" font-semibold">Welcome</h1>
        {/* <p className="font-medium text-lg text-gray-500 mt-4">
        Welcome, Please submit your details
      </p> */}
      </div>

      <div className="mt-2">
        <div>
          <label className="text-md font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
            placeholder="Enter your Email"
            name='username'
          />
        </div>
        <div>
          <label className="text-md font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
            placeholder="Enter your Email"
            type="password"
            name='password'
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="rem1" />
            <label for="rem1" className="ml-2 font-medium text-base">
              Remember me
            </label>
          </div>
          <button className="font-medium text-base text-violet-800">
            Forget Password
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-2.5 rounded bg-violet-800 text-white text-lg font-bold" type='submit'>
            Sign in
          </button>

          <button className="flex border-2 border-gray-200 py-2.5 items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 30 30"
            >
              <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
            </svg>
            Sign in with google
          </button>
        </div>
        <div className="mt-8 flex flex-col gap--1 justify-center items-center">
          <p className="font-medium text-base">Don't have an Account</p>
          <button className="text-violet-800 text-base font-medium ml-2"
          onClick={() => setState(true)}>
            Sign up
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default LoginForm;
