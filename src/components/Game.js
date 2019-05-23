import React from "react";
import { Redirect } from "react-router";



class EssayForm extends React.Component {
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

      );
    }
  }

export default EssayForm;





/*    ################## THIS WORKS PART 1 ############################
import React from "react";

const Game = () => {
    return (

<form name="myForm" 


action="./About"


onsubmit="playGame()">


Name: <input type="text" name="txtbox"></input>
<input type="submit" value="Submit"></input>

</form>

    );

}

export default Game;

#############################################################################   */



