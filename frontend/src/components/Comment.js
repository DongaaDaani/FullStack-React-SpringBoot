import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Modal,Button,Row,Col,Form,ButtonToolbar} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

export class Comment extends Component{

    constructor(props) {
        super(props);
        this.state = {
        
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={emps:[],loginActive:0, addModalShow:false, editModalShow:false}
      }

      refreshList(){
        fetch('https://localhost:44315/api/Employee')
        .then(response=> response.json())
        .then(data=>{ 
         this.setState({emps:data});
        });
     }

    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }

    componentDidMount(){
        const config={
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('token'),
                
            }
        };


        axios.get('user',config).then(
            res=>{
                this.setState({
                    user:res.data,
                    loginActive : 1
                });
            },
            err=>{
                console.log(err)
            }
        )
    }
    
    
    render(){
        if(this.state.loginActive ===1 ){
        const{emps}=this.state;
        return(
            <div className="justify-content-left "> 
            <Row>
            <Col sm={12}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="comment">
                        <Form.Label> <h1>Comment </h1></Form.Label>
                        <Form.Control type="textarea" name="comment" required   defaultValue={this.props.name} placeholder="Write your comment." />
                            
                    </Form.Group>
                    <Button variant="success" onClick={this.props.onHide}>Send</Button>

                </Form>
            </Col>
        </Row>


        <Table className="mt-4 " striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>name</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map(emp=>
                     <tr Key={emp.name}>
                     <td>{emp.comment}</td>
                    <td>               
                    </td>
                     </tr>
                     )}
                </tbody>
            </Table>
        </div>
          )
                    }
                    else{
                        const{emps}=this.state;
                        return(
                            <div className="justify-content-left "> 
                            <Row>
                            <Col sm={12}>
                                <Form readOnly onSubmit={this.handleSubmit}>
                                <Form.Group controlId="comment">
                                        <Form.Label readOnly> <h1> Comment </h1></Form.Label>
                                        <Form.Control type="textarea" name="comment" required  readOnly defaultValue={this.props.name} placeholder="If you would like to comment, please log in. " />
                                            
                                    </Form.Group>
                                    <Button variant="success" disabled onClick={this.props.onHide}>Send</Button>
                
                                </Form>
                            </Col>
                        </Row>
                
                
                        <Table className="mt-4 " striped bordered hover size="sm" >
                                <thead>
                                    <tr>
                                        <th>name</th>
                                        <th>Comment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {emps.map(emp=>
                                     <tr Key={emp.name}>
                                     <td>{emp.comment}</td>
                                    <td>               
                                    </td>
                                     </tr>
                                     )}
                                </tbody>
                            </Table>
                        </div>
                        )
                    }
    }
}