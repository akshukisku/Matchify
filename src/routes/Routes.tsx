import { createBrowserRouter } from "react-router-dom";
import HomeWrapper from "../layout/Homepage/HomeWrapper";
import Homepage from "../pages/Homepage";
import AuthSection from "../layout/Auth/AuthSection";
import Stories from "../pages/Stories";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/features",
        element:<Homepage/> 
      },
      {
        path:"/stories",
        element:<Stories/>
      }
      ,
      {
        path: "login",
        element:<AuthSection />
      }
    ],
  },
]);

export default Routes;
