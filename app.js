
const heading = React.createElement("div", {className: "container"},
    [React.createElement("h1", {id:"heading"} ,"Hello from react"),
    React.createElement("h2", {id:"heading"} ,"Hello from react h2")]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);