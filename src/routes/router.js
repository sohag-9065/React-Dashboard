import Main from "../layout/Main";
import Analytics from "../pages/Dashboard/Analytics/Analytics";
import Dashboard from "../pages/Dashboard/Dashboard";
import DefaultDashboard from "../pages/Dashboard/DefaultDashboard/DefaultDashboard";
import Sales from "../pages/Dashboard/Sales/Sales";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/shared/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
            children: [
                {
                    path: '',
                    element: <DefaultDashboard/>
                },
                {
                    path: 'default',
                    element: <DefaultDashboard/>
                },
                {
                    path: 'sales',
                    element: <Sales/>
                },
                {
                    path: 'analytics',
                    element: <Analytics/>
                }
            ]
        }
      ]
    },
  ]);

  export default router;