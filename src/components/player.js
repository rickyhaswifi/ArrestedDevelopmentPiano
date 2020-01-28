import React, {Component} from 'react';
import { PlayContainer, PlayPassButton } from "../styled-components/PlayerStyles";
import Charlie from '../shared/audio/piano.mp3'

class Player extends Component {
  state = {
    isPlaying: false,
  }

  constructor(props){
    super(props);
    this.piano = new Audio(Charlie);
  }

  render() { 
    const {isPlaying, currentTime} = this.state

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

    return ( 
      <>
      <PlayContainer>
        {/* <h1>
          Reject Ricky
        </h1> */}
        <PlayPassButton
          onClick={this.sound}
        >
        {isPlaying ? 'Pause' : 'Pass'}
        </PlayPassButton>
      </PlayContainer>
      </>
     );
  }
}
 
export default Player;