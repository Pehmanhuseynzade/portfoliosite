import About from "../pages/user/About";
import Contact from "../pages/user/Contact";
import Home from "../pages/user/Home";
import Mainroot from "../pages/user/Mainroot";


export const ROUTER = [
    {
        path:'/',
        element:<Mainroot/>,
        children:[
             {
                  path:'',
                  element:<Home/>
             },
             {
                  path:'about',
                  element:<About/>
             },
             {
                  path:'contact',
                  element:<Contact/>
             }
        ]
   }
]