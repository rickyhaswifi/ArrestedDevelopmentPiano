import React, {Component} from 'react';
import { 
PlayContainer, PlayPassButton, NameContainer,
PlayAcceptButton, ButtonContainer, EmailLink } 
from "../styled-components/PlayerStyles";
import Charlie from '../shared/audio/piano.mp3'
import Fiesta from '../shared/audio/fiesta.mp3'
import { Grid, Card, Image, Header, Icon, Menu, Segment, Sidebar  } from "semantic-ui-react";
import Fade from 'react-reveal/Fade'; 
import Footer from '../components/Footer';

class Player extends Component {
  state = {
    isPlaying: false,
    isFiestaPlaying: false,
    visible: false,
  }

  constructor(props){
    super(props);
    this.piano = new Audio(Charlie);
    this.fiesta = new Audio(Fiesta); 
  }

  render() { 
    const {isPlaying, isFiestaPlaying, visible} = this.state
    const {name, email} = this.props

    this.toggleSidebar = () => {
      this.setState({
         visible: !visible
        });
    }

      this.sound = () => {
        if (isPlaying) {
            console.log("pause");
            this.setState({ isPlaying: false });
            this.piano.pause();
            this.piano.currentTime = 0;
        } else {
            console.log("play")
            this.setState({ isPlaying: true });
            this.piano.play(); 
        }
      }  

      this.Fiestasound = () => {
        if (isFiestaPlaying) {
            console.log("pause");
            this.setState({ isFiestaPlaying: false });
            this.fiesta.pause();
            this.fiesta.currentTime = 0;
        } else {
            console.log("play")
            this.setState({ isFiestaPlaying: true });
            this.fiesta.play(); 
        }
      }  

    return ( 
      <>
<Sidebar.Pushable as={PlayContainer}>
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
    </Sidebar>

    <Sidebar.Pusher>

      <PlayContainer>
      <Fade down>
      <NameContainer>
      <button onClick={this.toggleSidebar}>
      ...
      </button>
      <h1>
      HIRE OR PASS:
      </h1>
      <h2>{name}</h2>
      </NameContainer>
      </Fade>

      <Grid columns={2}>
      <Grid.Row>
      <Grid.Column>
      <Fade left>
      <ButtonContainer>
      <PlayAcceptButton
      onClick={this.Fiestasound}
      >
      {isFiestaPlaying ? 'Pause' : 'Hire'}
      </PlayAcceptButton>
      </ButtonContainer>
      </Fade>

      </Grid.Column>
      <Grid.Column>
      <Fade right>
      <ButtonContainer>
      <PlayPassButton
      onClick={this.sound}
      >
      {isPlaying ? 'Pause' : 'Pass'}
      </PlayPassButton>
      </ButtonContainer>
      </Fade>

      </Grid.Column>
      </Grid.Row>
      </Grid>
     
      <Card
      style={{ display: isFiestaPlaying ? '' : 'none' }}
      >
      <Image src='http://clipart-library.com/images/pcqrzpbzi.jpg'></Image>
      <Card.Content>
      <Card.Header>Name: {name}</Card.Header>
      <Card.Description>
      Email: <EmailLink href={"mailto:" + email}>{email}</EmailLink>
      </Card.Description>
      </Card.Content>
      </Card>

      <Card
      style={{ display: isPlaying ? '' : 'none' }}
      >
      <Image src='https://thumbs.gfycat.com/DishonestSecondFawn-size_restricted.gif'></Image>
      <Card.Content>
      <Card.Header>Name: {name}</Card.Header>
      <Card.Description>
      Email: <EmailLink href={"mailto:" + email}>{email}</EmailLink>
      </Card.Description>
      </Card.Content>
      </Card>
      

      </PlayContainer>

    </Sidebar.Pusher>
  </Sidebar.Pushable>
      <Footer />
      </>
     );
  }
}
 
export default Player;