import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let textcolor = {color: 'skyblue'}

let fakeServerData = {
  user: {
    name: 'Sougandh',
    playlists: [
      {
        name: 'Hellolist1',
        songs: [
        {name:'A', duration: 2345},
        {name:'B',duration: 7898},
        {name:'C',duration: 7898},
        {name:'D',duration: 7898},
      ]
      },
      {
        name: 'Hellolist2',
        songs: [
          {name:'A', duration: 2345},
          {name:'B',duration: 7898},
          {name:'C',duration: 7898},
          {name:'D',duration: 7898},
        ]
      },
      {
        name: 'Hellolist3',
        songs: [
          {name:'A', duration: 2345},
          {name:'B',duration: 7898},
          {name:'C',duration: 7898},
          {name:'D',duration: 7898},
        ]
      },
      {
        name: 'Hellolist4',
        songs: [
          {name:'A', duration: 2345},
          {name:'B',duration: 7898},
          {name:'C',duration: 7898},
          {name:'D',duration: 7898},
        ]
      }
    ]
  }

}




class PlaylistCounter extends Component{
  render() {
    return(
      <div style={{width: "50%", display: 'inline-block'}}className="aggregate">
      <h2 style={textcolor}>{this.props.playlists.length} playlists</h2>
      
      </div>
    );

  }
}

class HoursCounter extends Component{
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlayList)=> {
      return songs.concat(eachPlayList.songs)
 
     }
     , [])

     let totalDuration = allSongs.reduce((sum, eachSong)=> {
      return sum + eachSong.duration
 
     }
     , 0)

    return(
      <div style={{width: "50%", display: 'inline-block'}}className="aggregate">
      <h2 style={textcolor}>{Math.round(totalDuration/60)} Hours</h2>
      
      </div>
    );

  }
}
class Filter extends Component{
  render() {
     
    return(
      <div style={{width: "100%"}}>
        <img/>
        <label style={textcolor}>Filter: </label><input type="text" onKeyUp={event => 
          this.props.onTextChange(event.target.value)}/>
      </div>
    );

  }
}

class Playlists extends Component{
  render() {
    return(
      <div style={{textcolor, width:"20%", display:"inline-block"}} ><img />      
      <h3>{this.props.playlist.name}</h3>
      <ul>
        {this.props.playlist.songs.map(song =>
        <li>{song.name}</li>
        )}
        </ul>
      </div>
    );
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {},
  filterString: ''}

  }

  componentDidMount() {
    setTimeout(()=> {this.setState({serverData: fakeServerData});
  }, 1000);
  setTimeout(()=> {this.setState({filterString: ''});
}, 2000);
  }
  
  render() {
    let name = 'Sougandh'
    let headerStyle= {color: 'skyblue'}
    return (
      <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
          {
          this.state.serverData.user ?
          <div>
          <h1>
          
          {this.state.serverData.user.name }'s, playlist.
          </h1>
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists}/>
           

          <Filter onTextChange = {text => this.setState({filterString: text})}/>
          {

            this.state.serverData.user.playlists.filter(
              playlist=> playlist.name.includes(this.state.filterString)
            )
            .map(playlist => 

                <Playlists playlist={playlist}/>
            
            
          )}
           
        <p style={textcolor} className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          
          </div> : <h1>Loading...</h1>
          }
          </header>
    </div> 
    );
    }
  }

       
        

export default App;
