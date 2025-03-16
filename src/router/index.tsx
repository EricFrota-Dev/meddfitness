import App from "@/App";
import { navegation } from "@/constants";
import Home from "@/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/meddfitness/",
    element: <App />,
    children: [
      { path: "/meddfitness/", element: <Home /> },
      ...navegation.map(({ url, element: Element }) => ({
        path: url,
        element: <Element />,
      })),
    ],
  },
]);
const RoutesProvider: React.FunctionComponent = () => {
  return <RouterProvider router={router} />;
};

export default RoutesProvider;
