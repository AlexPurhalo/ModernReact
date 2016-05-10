// imports a data from node_modules folder 
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
const App = () => {     //  var App = function App() {
  return <div>Hi!</div>;//      return React.createElement("div", null, "Hi!");
};                      //  }

// Take this component's generated HTML and put it on the page (in the document object model, shortcut: DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
// <App /> is instance
// document.querySelector(".container") selects some div with class name: "container" and render there the data
