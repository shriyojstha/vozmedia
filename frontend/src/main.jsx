import "./routes/App.css";
import { StrictMode } from "react";
import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./routes/App.jsx";
// import "./routes/App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import CreatePost, { FormAction } from "./components/CreatePost.jsx";

import { PostLoader } from "./components/Postlist.jsx";
import App1 from "./TodoFile/src/App.jsx";
import store from "./DataFiles/index.js";
import { Provider } from "react-redux";
import Sign from "./components/Login_Details/SignIn.jsx";
import CreatePost2, { FormAction2 } from "./components/createPost2.jsx";
import Loading from "../src/components/LoadingState.jsx";
import VerifyEmailForm from "./components/Login_Details/verifyEmail.jsx";
const Postlist = lazy(() => import("../src/components/Postlist"));
import { Toaster } from "react-hot-toast";
import Feed from "./components/Feed.jsx";

import { authStore } from "./store/authStore.js";

// const RedirectUser = ({ children }) => {
//   const { isAuthenticated, user } = authStore();

//   if (isAuthenticated && (user.isVerified)) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <CreatePost2 />,
        action: FormAction2,
      },
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "verify-email",
        element: <VerifyEmailForm />,
      },
      {
        path: "/todo-list",
        element: <App1 />,
      },
    ],
  },
  {
    path: "/login",
    element: <Sign />,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    {/* <StrictMode> */}
    <Toaster />
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>

    {/* </StrictMode> */}
  </>
);
