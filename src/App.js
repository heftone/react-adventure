import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
//import ReactDOM from "react-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Submit from "./components/Submit";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
//import Game from "./components/Game";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleSubmit(event) {
     
      if (this.state.value === "north"){
        alert('An essay was submitted: ' + this.state.value);
        return <Redirect to='/about' />
       
      }
      if (this.state.value ==="south"){
        alert('You are going South');
      }
      else {

      alert('Please type correct answer');
}
    event.preventDefault();
  }

  render() {
    return (

<BrowserRouter>
<div>
  
  <Navigation />
  <Switch>
   

   <Route path="/" component={Home} exact />
   <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/submit" component={Submit} />
    <Route component={Error} />
  </Switch>
  
  
  <div>
      <form onSubmit={this.handleSubmit}>
      <label>
        Essay:
        <input value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
</div>

</div>
</BrowserRouter>

    );
  }
}

export default App;

/*

<Game />


  */
 
 
 
  /*    

   function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  if (x == "yes") {
    return component={About}
  }
}
   */


/*

function validate(name) {
  const story1 = [];

 
      if (name === "yes" || name ==="no") {
        story1.push("I am Grod from Zod!");
      }
      if (name === "hi" || name ==="bye") {
        story1.push("Another Solar System");
      }
      else {
        story1.push("INVALID");
      }
      return story1;
    
}


class Grod extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      story1:[],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit = e => {
  e.preventDefault();

const { name } = this.state;


  const story1 = validate(name);
  if (story1.length > 0) {
    this.setState({ story1 });


    return;


      
  }

//submit the data
};
render() {

  const { story1 } = this.state;

  return (


    <form onSubmit={this.handleSubmit}>
    {story1.map(story1 => (
      <p key={story1}>{story1}</p>
      
    ))}
        <div>
    <h1>Welcome to the story of GROD!!</h1>
    </div>
    <input
      value={this.state.name}
      onChange={evt => this.setState({ name: evt.target.value })}
      type="text"
      placeholder="Name"
      />
      <button type="submit">Press Enter Mortal!</button>
      <h1>{ story1 }</h1>

    </form>

    


    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Grod />, rootElement);

serviceWorker.unregister();



*/