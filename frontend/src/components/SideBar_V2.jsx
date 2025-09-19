import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useState, useContext } from "react";
import logo1 from "../assets/logo1.svg";

const SideBarCntxt = createContext({
  isExpanded: [],
});

const Sidebar_V2 = ({ children }) => {
  const [isExpanded, setExpanded] = useState(true);
  return (
    <>
      <div className=''>
        <aside className="hidden lg:block h-screen">
          <nav className="h-full flex flex-col bg-gray-100 border-r shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
              <img src={logo1} className={ `overflow-hidden transition-all rounded-full ${isExpanded ? "w-10" : "w-0 h-0"}`  } />

              <button
                className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-50 "
                onClick={() => setExpanded((curr) => !curr)}
              >
                {isExpanded ? <ChevronFirst /> : <ChevronLast />}
              </button>
            </div>

            <SideBarCntxt.Provider value={{ isExpanded }}>
              <ul className="flex-1 px-3">{children}</ul>
            </SideBarCntxt.Provider>

            <div className="border-t flex p-3">
              <img src={logo1} className="w-15 overflow-hidden transition-all  rounded-full" />
              <div
                className={`flex justify-between items-center overflow-hidden transition-all ${
                  isExpanded ? "w-32 ml-3" : "w-0"
                }  `}
              >
                <div className="leading-4">
                  <h4 className="font-semibold"> Voz</h4>
                  <span className="text-xs text-gray-600">
                    shriyojstha@gmail.com
                  </span>
                </div>
                <MoreVertical size={20} />
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Sidebar_V2;

export const SideBarItem = ({ icon, text, active, alert }) => {
  const { isExpanded } = useContext(SideBarCntxt);

  return (
    <>
      <li
        className={`relative flex item-center
             py-2 px-3 my-1 font-medium rounded-md
              cursor-pointer transition-colors
               ${
                 active
                   ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                   : "hover:bg-indigo-50 text-gray-600"
               } `}
      >
        {icon}

        <span
          className={` overflow-hidden transition-all ${
            isExpanded ? "w-32 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400   ${
              isExpanded ? "" : "top-2"
            }`}
          ></div>
        )}

        {!isExpanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm 
    opacity-0 pointer-events-none -translate-x-3 
    transition-opacity transition-transform duration-200 
    group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto`}
          >
            {text}
          </div>
        )}
      </li>
    </>
  );
};
