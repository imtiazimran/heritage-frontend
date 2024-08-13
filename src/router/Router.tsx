import App from "@/App";
import BuyerScreen from "@/layout/BuyerScreen";
import Home from "@/layout/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
            path: "/buy",
            element: <BuyerScreen />
        }
      ],
    },
  ]);