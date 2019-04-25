import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gblFunc from './person';

class App extends Component {

   constructor(props){
       super(props);
       this.state = {
           id : '',
           name : '',
       }
       this.addname = this.addname.bind(this);
       this.searchname = this.searchname.bind(this);
       this.updateid = this.updateid.bind(this);
       this.updateData= this.updateData.bind(this);
   }
   addname(e){
       this.setState({
           name : e.target.value
       })
   }
   searchname(e){
    this.setState({
        name : e.target.value
    })
}
    updateid(e){
        this.setState({
            id : e.target.value
        })
    }
   
    updateData(name){
       if(name=="Name"){
           gblFunc.addPerson(this.state.name);
       }
       else if (name== "Searchname"){
        gblFunc.searchPersonByid(this.state.sname)
       }
       else{
           gblFunc.searchPersonByid(this.state.id)
       }
    }
    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <input value={this.state.name} id="name" onChange={(e)=>{this.addname(e)}}/>
          <button onClick={()=>{this.updateData("Name")}}>Add Name</button>

          <input value={this.state.sname} id="sname" onChange={(e)=>{this.searchname(e)}}/>
          <button onClick={()=>{this.updateData("Searchname")}}>Search Name</button>


          <input value={this.state.id} id="id" onChange={(e)=>{this.updateid(e)}}/>
          <button onClick={()=>{this.updateData("id")}}>Click me pls Id</button>
          <div id="success"></div>
      </div>


    );
  }
}

export default App;
