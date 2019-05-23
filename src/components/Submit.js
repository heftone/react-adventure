import React, { Component } from 'react';

import { Route } from "react-router-dom";
//import ReactDOM from 'react-dom';
//import About from "./components/About";
//import Contact from "/Contact";
//import Submit from "./components/Submit";


const Submit = () => {
    return (
        <div>
            <form>
  <label>
    Choose your path:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
        </div>
    );
};

function Answer(props) {
    const theAnswer = "hello";
    
    if (theAnswer) {
        return (
            alert("Hello")
        )
    }

}

export default Submit;