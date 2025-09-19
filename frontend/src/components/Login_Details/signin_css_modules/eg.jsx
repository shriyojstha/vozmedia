import LoginForm from "./LoginForm";
import style from "./signin_css_modules/SignIn.module.css";
import SignUpForm from "./SignUp";

const Sign = () => {
  return (
    <div className="flex w-full  h-screen bg-gray">
      <div className="w-full  flex items-center justify-center lg:w-1/2  ">
        <SignUpForm /> {/* <LoginForm />*/}
      </div>
      <div className=" hidden lg:flex w-1/2 h-full relative bg-gray-200 items-center justify-center">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
        <div className="w-full h-1/2 absolute bg-white/10 bottom-0 backdrop-blur-lg"/>
      </div>
    </div>
  );
};

export default Sign;
