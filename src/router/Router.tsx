import App from "@/App";
import About from "@/layout/About";
import BuyerScreen from "@/layout/BuyerScreen";
import BuyerSearchResult from "@/layout/BuyerSearchResult";
import Home from "@/layout/Home";
import Login from "@/pages/Authenticaton/Login";
import Register from "@/pages/Authenticaton/Register";
import PropertyDetails from "@/pages/propertyDetails.tsx/PropertyDetails";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/buy",
        element: <BuyerScreen />,
      },
      {
        path: "/searchResult",
        element: <BuyerSearchResult />,
      },
      {
        path: "propertyDetails/:id",
        element: <PropertyDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/sell",
        element: <BuyerScreen />,
      },
      {
        path: "/service",
        element: <BuyerScreen />,
      },
      {
        path: "/manage-rental",
        element: <BuyerScreen />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
