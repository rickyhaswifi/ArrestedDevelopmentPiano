import React, { Component } from 'react';
import {Icon} from "semantic-ui-react";

class MenuCredits extends Component {
  state = { 
    arrested: [],
    dora: [],
   }
  

  componentDidMount(){
    fetch("http://www.omdbapi.com/?t=Charlie+brown&apikey=" + process.env.REACT_APP_API_KEY)
    .then(res => res.json())
    .then(data => {
      this.setState({ arrested: data })
    console.log(data.Title)
    })
    .catch(err => {
    console.log(err)
    })

    fetch("http://www.omdbapi.com/?t=Dora+the+explorer&apikey=" + process.env.REACT_APP_API_KEY)
    .then(res => res.json())
    .then(data => {
      this.setState({ dora: data })
    })
    .catch(err => {
    console.log(err)
    })

  }

  render() { 
    const {arrested, dora} = this.state
    return ( 
      <>
      <h1>Sound Credit:</h1>
      <hr />
      <h2>
      {arrested.Title}
      </h2>
      <img alt='poster' src={arrested.Poster}></img>
      <p>
      <hr />
      <h2>
      {dora.Title}
      </h2>
      <img alt='poster' src={dora.Poster}></img>
      <p></p>
      API Courtesty of: <a target="_blank" rel="noopener noreferrer" href="http://www.omdbapi.com">www.omdbapi.com</a>
      </p>
      <br />
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/rickyhaswifi/ArrestedDevelopmentPiano'>
      <Icon name='github square' size='large'></Icon></a>
      <br />
      </>
     );
  }
}
 
export default MenuCredits;