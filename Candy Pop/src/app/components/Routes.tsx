import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/about", element: <App /> },
      { path: "/home", element: <App /> },
      { path: "/login", element: <App /> },
      { path: "/products", element: <App /> },
      { path: "/reviews", element: <App /> },
      { path: "/shopping", element: <App /> },
    ],
  },
]);
