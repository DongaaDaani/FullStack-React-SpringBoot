import React, {Component, useState} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
import axios from 'axios';

export class Login extends Component{
    constructor(props){
        super(props);

        this.state={snackbaropen:false,snackbarmsg:''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  

    handleSubmit(event){
        event.preventDefault();

        const data = {
            username: this.username,
            password:this.password
        }

     axios.post('login',data)
        .then(res=>{
            localStorage.setItem('token',res.data.token);
        })
        .catch(err => {
            console.log(err)
        })
    }

  

    render(){
        return(
             
            <div className="container">
                
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Login
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
              <Row>
                  <Col sm={6}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group controlId="username">
                              <Form.Label>Username</Form.Label>
                              <Form.Control type="text" name="username" required placeholder="username" onChange={e=> this.username = e.target.value} />
                                  
                          </Form.Group>

                          <Form.Group controlId="password">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" name="password" required placeholder="password" onChange={e=> this.password = e.target.value}  />
                                  
                          </Form.Group>

                          <Form.Group>
                              <Button variant="success" type="submit">Login</Button>
                          </Form.Group>
                      </Form>
                  </Col>
              </Row>
            

            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
          </div>
        );

    }
}