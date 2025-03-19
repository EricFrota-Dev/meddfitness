import App from "@/App";
import Loading from "@/components/ui/Loading";
import { navegation } from "@/constants";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));

const router = createBrowserRouter([
  {
    path: "/meddfitness/",
    element: <App />,
    children: [
      {
        path: "/meddfitness/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      ...navegation.map(({ url, element: Element }) => ({
        path: url,
        element: (
          <Suspense fallback={<Loading />}>
            <Element />
          </Suspense>
        ),
      })),
    ],
  },
]);
const RoutesProvider: React.FunctionComponent = () => {
  return <RouterProvider router={router} />;
};

export default RoutesProvider;
