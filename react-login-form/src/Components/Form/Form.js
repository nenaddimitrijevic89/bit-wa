import React from 'react';
import{Container, Row, Col,Form} from 'react-bootstrap';
import {EmailField} from '../EmailField/EmailField';
import { PasswordField } from '../PasswordField/Passwordfield';
import { Btn } from '../PasswordField/Button/Btn';
import {Header} from '../Header/Header';

class LoginForm extends React.Component{
  constructor(){
    super();
    this.state={
      email:null,
      password:null
    }
  }
setEmail=(text)=>{
  this.setState({email:text})
}
setPassword=(text)=>{
  this.setState({password:text})
}
submitInfo=()=>{
  alert(`email: ${this.state.email} || password: ${this.state.password}`)
  this.resetInfo()
}
resetInfo=()=>{
  this.setState({email: "", password: ""})
}

  render(){
    return(
      <Container fluid>
      <Header/>
      <Container>
          <Row>
              <Col lg={4} offset={4}>
                <Form>
                  <EmailField setEmail={this.setEmail} value={this.state.email}/>
                  <PasswordField setPassword={this.setPassword} value={this.state.password}/>
                  <Btn name={"Submit"} fn={this.submitInfo}/>
                  <Btn name={"Reset"} fn={this.resetInfo}/>
                </Form>
              </Col>
          </Row>
        </Container>
        </Container>
  )
  }
}


export { LoginForm };