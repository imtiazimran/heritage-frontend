import App from "@/App";
import BuyerScreen from "@/layout/BuyerScreen";
import BuyerSearchResult from "@/layout/BuyerSearchResult";
import Home from "@/layout/Home";
import PropertyDetails from "@/pages/propertyDetails.tsx/PropertyDetails";
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
        },
        {
          path: '/searchResult',
          element: <BuyerSearchResult/>
        },
        {
          path: 'propertyDetails/:id',
          element: <PropertyDetails/>
        }
      ],
    },
  ]);