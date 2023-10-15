import React from "react";
import ReactDOM from "react-dom/client";
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'

// const element = React.createElement("div", {className: "container"},
//     [React.createElement("h1", {id:"heading"} ,"Hello from react"),
//     React.createElement("h2", {id:"heading"} ,"Hello from react h2")]
// );
// console.log(element);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="app">
        <Header />
        <Body />
        <Footer />
    </div>
);