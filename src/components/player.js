import React, {Component} from 'react';
import { 
PlayContainer, PlayPassButton, NameContainer,
PlayAcceptButton, ButtonContainer, EmailLink } 
from "../styled-components/PlayerStyles";
import Charlie from '../shared/audio/piano.mp3'
import Fiesta from '../shared/audio/fiesta.mp3'
import Bugs from '../shared/images/trio.jpg'
import Walk from '../shared/images/walk.gif'
import { Grid, Card, Image} from "semantic-ui-react";
import Fade from 'react-reveal/Fade'; 
import Footer from '../components/Footer';

class Player extends Component {
  state = {
    isPlaying: false,
    isFiestaPlaying: false,
  }

  constructor(props){
    super(props);
    this.piano = new Audio(Charlie);
    this.fiesta = new Audio(Fiesta); 
  }

  render() { 
    const {isPlaying, isFiestaPlaying} = this.state
    const {name, email} = this.props

      this.sound = () => {
        if (isPlaying) {
            this.setState({ isPlaying: false });
            this.piano.pause();
            this.piano.currentTime = 0;
        } else {
            this.setState({ isPlaying: true });
            this.piano.play(); 
            this.fiesta.pause();
            this.fiesta.currentTime = 0;
            this.setState({ isFiestaPlaying: false });
        }
      }  

      this.Fiestasound = () => {
        if (isFiestaPlaying) {
            this.setState({ isFiestaPlaying: false });
            this.fiesta.pause();
            this.fiesta.currentTime = 0;
        } else {
            this.setState({ isFiestaPlaying: true });
            this.fiesta.play(); 
            this.piano.pause();
            this.piano.currentTime = 0;
            this.setState({ isPlaying: false });
        }
      }  

    return ( 
      <>
      <PlayContainer>
      <Fade down>
      <NameContainer>
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
      <Image src={Bugs}></Image>
      <Card.Content>
      <Card.Header>Give {name} great news they are hired!</Card.Header>
      <Card.Description>
      Email: <EmailLink href={"mailto:" + email}>{email}</EmailLink>
      </Card.Description>
      </Card.Content>
      </Card>

      <Card
      style={{ display: isPlaying ? '' : 'none' }}
      >
      <Image src={Walk}></Image>
      <Card.Content>
      <Card.Header>Let {name} know they didn't get the position</Card.Header>
      <Card.Description>
      Email: <EmailLink href={"mailto:" + email}>{email}</EmailLink>
      </Card.Description>
      </Card.Content>
      </Card>
      

      </PlayContainer>
      <Footer />
      </>
     );
  }
}
 
export default Player;