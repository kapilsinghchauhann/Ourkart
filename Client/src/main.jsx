import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MinutesPage from "./MinutesPage/MinutesPage.jsx";
import ErrorPage from "./ErroePage/ErrorPage.jsx";
import Cart from "./MinutesPage/Cart/Cart.jsx";
import { CartProvider } from "./CartContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <ErrorPage /> },
  { path: "/MinutesPage", element: <MinutesPage /> },
  { path: "/Cart", element: <Cart /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
