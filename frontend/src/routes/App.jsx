import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
// import Postlist from "../components/Postlist.jsx";
// import Post from "../components/Post.jsx";
import { useState } from "react";
// import DataProvider from "../DataFiles/DataHandling.jsx";
// import CreatePost from "../components/CreatePost.jsx";
// import Welcome from "./components/WelcomePage.jsx";
// import App1 from "../TodoFile/src/App.jsx";
import { Outlet } from "react-router-dom";
// import Sidebar_V2 from "../components/SideBar_V2.jsx";

const App = () => {
  const [currState, setcurrState] = useState("Home");

  const handleStateChange = (value) => {
    setcurrState(value);
  };

  return (
    <>
      <div className="app-container bg-gray-100">
        <div className="flex">
          <Sidebar />
        </div>

        {/* <Sidebar state={currState} setState={setcurrState}></Sidebar> */}
        <div className="content">
          <Header
            TodoListCLicked={handleStateChange}
            state={currState}
          ></Header>

          {/* {components[currState] || <h1>Error</h1>} */}

          <main className="bg-gray-100">
            <Outlet />
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
