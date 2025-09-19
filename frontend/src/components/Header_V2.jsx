import styles from "./css_modules/Header.module.css";
import { NavBarMenu } from "./UI_Data/data";
import logo1 from "../assets/logo1.svg";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { MdCreate } from "react-icons/md";


const Header_V2 = () => {
  const [isOpen, setState] = useState(false);
 
  return (
    <>
      <nav className="w-full bg-zinc-100 bg-gray border-b  border-black">
        <div className="container m-0  flex justify-between items-center  py-1">
          {/* Logo Section */}
          <div>
            <img src={logo1} className={`w-20`} />
          </div>
          {/* Menu Section */}
          <div className={`hidden md:block`}>
            <ul className="flex items-center gap-4 text-black-100">
              {NavBarMenu.map((items) => {
                return (
                  <li key={items.id}>
                    <Link
                      to={items.link}
                      className="!inline-block !text-gray-700 !no-underline py-1 px-3 hover:text-white transition-colors duration-200 font-semibold"
                    >
                      {items.title}
                    </Link>{" "}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons Section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch className="text-2xl" />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <Link to="/create-post">
                <MdCreate className="text-2xl text-black" />
              </Link>
            </button>
            <button className="hover:bg-gray-200 font-semibold hover:text-white rounded-md border-2 border-transparent px-6 py-2 duration-200 hidden md:block">
              <Link to="/login">login</Link>
            </button>
          </div>
          {/* Mobile hamburger Section */}
          <div className="msd:hidden">
            <MdMenu className="text-4xl" onClick={() => setState(!isOpen)} />
          </div>
        </div>
      </nav>

      {/* Mobile Section */}
      <ResponsiveMenu open={isOpen} />
    </>
  );
};

export default Header_V2;
