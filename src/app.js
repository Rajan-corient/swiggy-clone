import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SearchContext, SearchContextProvider } from "./context/SearchContext";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import RestaurantInfo from "./components/RestaurantInfo";
import Posts from "./components/Posts";

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
      {
        path: "/post",
        element: <Posts />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchContextProvider>
    <RouterProvider router={appRouter} />
    {/* <App />  */}
  </SearchContextProvider>
);
