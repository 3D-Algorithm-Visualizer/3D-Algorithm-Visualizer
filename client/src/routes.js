/* eslint-disable prettier/prettier */
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import PfAlgorithms from './pages/PfAlgorithms.js';
import SortingAlgorithms from "./pages/SortingAlgorithms"
import Blog from './pages/Blog';
import NotFound from './pages/Page404';
import Landing from "./pages/Landing"

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([

    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: '3dtool', element: <PfAlgorithms /> },
        { path: 'sortingalgorithms', element: <SortingAlgorithms /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'welcome', element: <Landing /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/welcome" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
