import React, { Component } from 'react';
import Player from "../components/player";
import HomeForm from "../components/HomeForm";
import "../styled-components/App.css";
import {Switch, Route, useParams } from 'react-router-dom';
import { Grid, Card, Image, Header, Icon, Menu, Segment, Sidebar  } from "semantic-ui-react";

function Name() {

  let { id, email } = useParams();

  return (
    <>
    <Player 
    name={id}
    email={email}
    />
    </>
  );
}

class App extends Component {
    state = {
      visible: false,
    }
  render() {
    const { visible} = this.state

    this.toggleSidebar = () => {
      this.setState({
         visible: !visible
        });
    }
    return(
      <>
      <Menu color='orange' inverted >
      <Menu.Item
          onClick={this.toggleSidebar}
          position='right'
        >
          <Icon name='hand peace' size='large'/>
        </Menu.Item>
      </Menu>
      <Sidebar.Pushable as={Route}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible = {visible}
      width='wide'
    >
   {/* CONTENT GOES HERE */}
   <br/>
   <Header as='h2' color='grey'>
   Hire Decision Generator
   </Header>
   <Header as='h4' color='grey'>
   by Ricardo Bautista
   </Header>
    </Sidebar>

    <Sidebar.Pusher>
      <Switch>
      <Route exact path="/" component={HomeForm} />
      <Route exact path="/:id/:email" component={Player} children={<Name />} />
      </Switch>
      </Sidebar.Pusher>
  </Sidebar.Pushable>
      </>
    )
  }
}


export default App;