import React, { Component } from 'react';
import Player from "../components/player";
import HomeForm from "../components/HomeForm";
import "../styled-components/App.css";
import {Switch, Route, useParams } from 'react-router-dom';

function Name() {

  let { id } = useParams();

  return (
    <>
    <Player 
    name={id}
    />
    </>
  );
}

class App extends Component {
  render() {
    return(
      <>
      <Switch>
      <Route exact path="/" component={HomeForm} />
      <Route exact path="/:id" component={Player} children={<Name />} />
      </Switch>
      </>
    )
  }
}


export default App;