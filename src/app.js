import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import {SearchContext, SearchContextProvider} from "./context/SearchContext";

// const element = React.createElement("div", {className: "container"},
//     [React.createElement("h1", {id:"heading"} ,"Hello from react"),
//     React.createElement("h2", {id:"heading"} ,"Hello from react h2")]
// );
// console.log(element);

import React from 'react'

const App = () => {
  return (
    <div className="app">
        <Header />
        <Body />
        <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <SearchContextProvider>
        <App />
    </SearchContextProvider>
);