import React, { Component } from 'react';
import { PlayContainer, PageContainer } from "../styled-components/PlayerStyles";
import { Button, Divider, Form, Icon } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'; 
import Footer from '../components/Footer';

class HomeForm extends Component {
    state = { 
      FullName: '',
      Email: ''
     }

    handleChange = (e) => {
      const { name, value } = e.target
      this.setState({ [name]: value })
    }

  render() { 
    const {FullName, Email} = this.state
    return ( 
      <>
      <PlayContainer>
        <PageContainer>
      <Form size='massive'>
      <Fade>
        <h1><Icon name='hand peace' size='large'/> Hire Decision Generator</h1>
      </Fade>
        <Fade left>
        <Form.Group widths='equal'>
        <Form.Input
        value={FullName}
        required
        label='Enter Your Name'
        name='FullName'
        control='input'
        placeholder='George Maharis'
        onChange={this.handleChange}
        />
       
        <Form.Input
        required
        value={Email}
        label='Enter your email'
        name='Email'
        control='input'
        placeholder='info@fakeblock.com'
        onChange={this.handleChange}
        />
        </Form.Group>
        </Fade>
        <Fade right>
        <Button animated fluid primary href={"/" + FullName + "/" + Email }>
        <Button.Content visible>Submit</Button.Content>
        <Button.Content hidden>
        <Icon name='arrow right' />
        </Button.Content>
        </Button>
        </Fade>
        <Divider hidden />
      </Form>
     <p>
       Fill out the form & send the next page to the company you applied at.
     </p>
        </PageContainer>
      </PlayContainer>
    <Footer />
      </>
     );
  }
}
 
export default HomeForm;