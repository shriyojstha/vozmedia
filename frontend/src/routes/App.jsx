import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

import Friends from "../components/Friends";
import BottomNav from "../components/BottomNav";
import { authStore } from "../store/authStore";
import { Outlet } from "react-router-dom";


const App = () => {
  const [dark, setDark] = useState(false);

  const { checkAuth, isAuthenticated, user } = authStore();


  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(user);
  

  const toogleDarkMode = () => {
    setDark((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !dark);
  };
  return (
    <div
      className={`flex min-h-screen w-full  justify-center items-center md:flex-row ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <main className="flex min-h-screen w-full">
        <NavBar toogleDarkMode={toogleDarkMode} darkMode={dark} />
        <Outlet />
        <Friends />
        <BottomNav toogleDarkMode={toogleDarkMode} darkMode={dark} />
      </main>
    </div>
  );
};

export default App;
