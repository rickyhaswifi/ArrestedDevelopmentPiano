import React, { Component } from 'react';
import { PlayContainer, PageContainer } from "../styled-components/PlayerStyles";
import { Button, Divider, Form, Icon } from 'semantic-ui-react'

class HomeForm extends Component {
    state = { 
      FullName: ''
     }
  
    handleNameChange = (e) => {
    console.log(e.target.value)
    this.setState({
      FullName:e.target.value
    })
    }

    // handleNameSubmit = (e) => {
      
    // }

  render() { 
    const {FullName} = this.state
    return ( 
      <>
      <PlayContainer>
        <PageContainer>
      <Form size='massive' onSubmit={this.handleNameSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            value={FullName}
            label='Enter your name'
            control='input'
            placeholder='Full name'
            onChange={this.handleNameChange}
          />
        </Form.Group>
        <Button animated fluid primary href={FullName}>
      <Button.Content visible>Submit</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
        <Divider hidden />
      </Form>
        </PageContainer>
      </PlayContainer>
      </>
     );
  }
}
 
export default HomeForm;