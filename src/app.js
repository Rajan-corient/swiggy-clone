import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SearchContext, SearchContextProvider } from "./context/SearchContext";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";

// const element = React.createElement("div", {className: "container"},
//     [React.createElement("h1", {id:"heading"} ,"Hello from react"),
//     React.createElement("h2", {id:"heading"} ,"Hello from react h2")]
// );
// console.log(element);

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <About />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    <SearchContextProvider>
      <Outlet />
    </SearchContextProvider>
  </RouterProvider>
);
