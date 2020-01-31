import React, { Component } from 'react';
import Player from "../components/player";
import HomeForm from "../components/HomeForm";
import MenuCredits from "../components/MenuCredits";
import "../styled-components/App.css";
import {Switch, Route, useParams } from 'react-router-dom';
import { Header, Icon, Menu, Sidebar  } from "semantic-ui-react";

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
          <Icon name={visible ? 'close' : 'hand peace'}/>
        </Menu.Item>
      </Menu>
      <Sidebar.Pushable as={Route}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      onHide={() => this.setState({visible: false})}
      visible = {visible}
      width='wide'
    >
   <br/>
   <Header as='h2' color='grey'>
   <Icon name='hand peace' size='large'/> Hire Decision Generator
   </Header>
   <Header as='h4' color='grey'>
   by Ricardo Bautista
   </Header>
      <a href='/George%20Maharis/info@fakeblock.com'>Example Page</a>
      <p style={{color:'white', padding:'2em'}}>
        Send your generated link in with your job application to give a fun Hire/Pass interaction for the company with your contact info.
      </p>
      <MenuCredits />
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