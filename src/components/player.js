import React, {Component} from 'react';
import { PlayContainer, PlayPassButton, NameContainer,
   PlayAcceptButton, ButtonContainer } from "../styled-components/PlayerStyles";
import Charlie from '../shared/audio/piano.mp3'
import Fiesta from '../shared/audio/fiesta.mp3'

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
    const {name} = this.props

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
        <NameContainer>
        <h1>
        HIRE OR PASS:
        </h1>
          <h2>{name}</h2>
        </NameContainer>
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

      </PlayContainer>
      </>
     );
  }
}
 
export default Player;