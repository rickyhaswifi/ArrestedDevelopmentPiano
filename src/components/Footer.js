import React, {Component} from 'react';
import { FooterContainer } from "../styled-components/FooterStyles";

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().getFullYear().toLocaleString().split(",")
    };
  }

  render(){
    return(
    <>
    <FooterContainer>
      <p>
        <a href='/'>Make your own</a>
      </p>
      <p>
    &copy; {this.state.date} <a href='https://ricardobautista.netlify.com/' target="_blank">Ricardo Bautista</a>
      </p>
    </FooterContainer>
    </>
    )
  }
}


export default Footer;