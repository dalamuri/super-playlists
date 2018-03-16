import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let textcolor = {color: 'skyblue'}

class Aggregate extends Component{
  render() {
    return(
      <div style={{width: "50%", display: 'inline-block'}}className="aggregate">
      <h2 style={textcolor}>Its React Time.</h2>
      
      </div>
    );

  }
}
class Filter extends Component{
  render() {
    return(
      <div style={{width: "100%"}}>
        <img/>
        <label style={textcolor}>Filter: </label><input type="text"/>
      </div>
    );

  }
}

class Playlists extends Component{
  render() {
    return(
      <div style={{textcolor, width:"10%", display:"inline-block"}} ><img />      
      <h3>Playlist Name</h3>
      <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li><li>Song 4</li></ul>
      </div>
    );

  }
}

class App extends Component {
  render() {
    let name = 'Sougandh'
    let headerStyle= {color: 'skyblue'}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={headerStyle} className="App-title">Hello, {name}.</h1>
          <Aggregate/>
          <Aggregate/>

          <Filter/>

          <Playlists/>
          <Playlists/>
          <Playlists/>
          <Playlists/>
          <Playlists/>
          <Playlists/>
          
        </header>
        <p style={textcolor} className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
      </div>
    );
  }
}

export default App;
