import { createBrowserRouter } from "react-router-dom";
import HomeWrapper from "../layout/Homepage/HomeWrapper";
import Homepage from "../pages/Homepage";
import AuthSection from "../layout/Auth/AuthSection";
import Stories from "../pages/Stories";
import  Safety from "../pages/Safety";
import Premium from "../pages/Premium";

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
        path:"/safety",
        element:<Safety/>
      },
      {
        path:"/premium",
        element:<Premium/>
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
