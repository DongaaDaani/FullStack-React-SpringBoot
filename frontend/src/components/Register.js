import React, {Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';

export class Register extends Component{
    constructor(props){
        super(props);

        this.state={snackbaropen:false,snackbarmsg:'',username:''};
       // this.state=this.initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   

    handleSubmit(event){
        event.preventDefault();

        fetch('http://localhost:8080/api/v1/User',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                name:event.target.name.value,
                username:event.target.username.value,
                password:event.target.password.value,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            // alert(result);   
            this.setState({snackbaropen:true,snackbarmsg:result,username:event.target.username.value})
        },
        (error)=>{
            this.setState({snackbaropen:true,snackbarmsg:'fail'})
        }
        )
       
        this.state.username = event.target.username.value
        console.log(this.state.username);
    }

    static getUser = () => {
        return this.state.username;
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
                Register
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
              <Row>
                  <Col sm={6}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group controlId="name">
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" name="name" required placeholder="Enter your full name or nickname"  />
                                  
                          </Form.Group>

                          <Form.Group controlId="username">
                              <Form.Label>Username</Form.Label>
                              <Form.Control type="text" name="username" required placeholder="Enter your Username" />
                                  
                          </Form.Group>

                          <Form.Group controlId="password">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" name="password" required placeholder="Enter the password"  />
                          </Form.Group>


                          <Form.Group>
                              <Button variant="primary" type="submit">Register</Button>
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