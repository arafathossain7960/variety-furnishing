import React from "react";
import { RouterProvider } from "react-router-dom";
import Navigation from "./pages/SharedPage/Navigation/Navigation";
import { router } from "./routes/Router";

function App() {
  return (
    
      <div className=" max-w-[1450pxs]">
        <RouterProvider router={router}>

        </RouterProvider>

      </div>
  );
}

export default App;
