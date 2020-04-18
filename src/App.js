import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';  // this will import ONLY render from the package
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Maggie",
      animal: "Dog",
      breed: "Lab"
    }),
    React.createElement(Pet, { name: "Misty", animal: "Cat", breed: "Mix" })
  ]);
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(React.createElement(App), document.getElementById("root"));
