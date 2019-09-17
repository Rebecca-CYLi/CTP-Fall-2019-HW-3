import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function City(props) {
  return (<div></div>);
}

function ZipSearchField(props) {
  return (<div></div>);
}

class App extends React.Component{
  state = {
    location: "",
    zipcode: "",
  };

  //use async keywork to tell js it's async
  getZipcodeData = async() => {
    //get data from API
    const response = await fetch(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zipcode}`);
    const data = await response.json();
    this.setState({location: data.results[0]})
    console.log(data.results[0]);
    this.setState({
      zipcode: `http://ctp-zip-api.herokuapp.com/zip/${this.state.zipcode}`
    });
  };

  render(){
    return (
      <div>
        <InputComponent />
        <button onClick={this.getZipcodeData}>
            Click to get Zipcode info</button>

      </div>
    );
  }
}//closes App

class InputComponent extends React.Component{
  state = {
    zipcode: ""
    /* puts initial word in textbox or empty */
  };
  
  changeHandler = (event) => {
      this.setState(
        {zipcode: event.target.value});
  }
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
      </div>
      
      <div>
        <input type="text"
               onChange={this.changeHandler}
               value={this.state.zipcode} />
      </div>

      <div>
          <City />
          <City />
        </div>
      </div>
    )
  }//closes render
}//closes class InputComponent



export default App;