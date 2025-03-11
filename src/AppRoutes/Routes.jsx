import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";



const Routes = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/a',
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default Routes;