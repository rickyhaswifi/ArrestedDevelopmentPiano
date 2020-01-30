import React, {Component} from 'react';
import { PlayContainer, PlayPassButton, NameContainer,
   PlayAcceptButton, ButtonContainer, EmailLink } from "../styled-components/PlayerStyles";
import Charlie from '../shared/audio/piano.mp3'
import Fiesta from '../shared/audio/fiesta.mp3'
import { Card, Image } from "semantic-ui-react";
import Fade from 'react-reveal/Fade'; 
import Footer from '../components/Footer'

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
      <PlayContainer>
        
        <Fade down>
        <NameContainer>
        <h1>
        HIRE OR PASS:
        </h1>
          <h2>{name}</h2>
        </NameContainer>
        </Fade>

        <Card
      style={{ display: isFiestaPlaying ? '' : 'none' }}
      >
      <Image src='http://clipart-library.com/images/pcqrzpbzi.jpg'></Image>
      <Card.Content>
      <Card.Header>Name: {name}</Card.Header>
      <Card.Description>
      Email: <EmailLink href={"mailto:" +email}>{email}</EmailLink>
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
      Email: <EmailLink href={"mailto:" +email}>{email}</EmailLink>
      </Card.Description>
      </Card.Content>
      </Card>
      
      <Fade left>
      <ButtonContainer>
      <PlayAcceptButton
      onClick={this.Fiestasound}
      >
      {isFiestaPlaying ? 'Pause' : 'Hire'}
      </PlayAcceptButton>

      <PlayPassButton
      onClick={this.sound}
      >
      {isPlaying ? 'Pause' : 'Pass'}
      </PlayPassButton>
      </ButtonContainer>
      </Fade>

      </PlayContainer>
      <Footer />
      </>
     );
  }
}
 
export default Player;