import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Modal,Button,Row,Col,Form,ButtonToolbar} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Register} from './Register';

export class Comment extends Component{

     
    
    constructor(props) {
        super(props);
        
        this.state={emps:[],
            loginActive:1,
             addModalShow:false, 
             editModalShow:false,
             snackbaropen:false,
             snackbarmsg:'',
         //    nameUser : this.props.username
            }

            this.handleSubmit = this.handleSubmit.bind(this);
      }

      refreshList(){
        fetch('http://localhost:8080/api/v1/Comment')
        .then(response=> response.json())
        .then(data=>{ 
         this.setState({emps:data});
        });
     }
    
    handleSubmit(event){
  
        event.preventDefault();

        fetch('http://localhost:8080/api/v1/Comment',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                commentdescription:event.target.comment.value,
           //     user:username, 
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert('Success!')  
            this.setState({snackbaropen:true,snackbarmsg:result})
          
        },
        (error)=>{
            this.setState({snackbaropen:true,snackbarmsg:'fail'})
        }
        )
        this.refreshList();
        
    }
    componentDidMount(){
        console.log(this.state.emps.user);
        this.refreshList();
    }
   /*
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
    } */


    
    
    render(){
        if(this.state.loginActive ===1 ){
          const{emps}=this.state;
        return(
           <div className="container">
  
      
        
        
          <Row>
              <Col sm={12}>
                  <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="comment">
                          <Form.Label><h2>Comment</h2></Form.Label>
                          <Form.Control type="comment" name="comment" required  ref={(c) => this.comment = c} required placeholder="Write your comment."  />
                              
                      </Form.Group>


                      <Form.Group>
                          <Button variant="success" type="submit">Send</Button>
                      </Form.Group>
                  </Form>
              </Col>
          </Row>
        

          <Table className="mt-4 " striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>Comment</th>
                        <th>name</th>
                       <th>Teszt</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map(emp=>
                     <tr Key={emp.user}>
                     <td>{emp.commentdescription}</td>
                  <td>    <Register username={this.state.username} /> </td>
                    <td>               
                    </td>
                     </tr>
                     )}
                </tbody>
            </Table>

       
      </div> );
                    }
                    else{
                        const{emps}=this.state;
                        return(
                            <div className="justify-content-left "> 
                           
          <Row>
              <Col sm={12}>
                  <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="comment">
                          <Form.Label><h2>Comment</h2></Form.Label>
                          <Form.Control type="comment" name="comment" required disabled  ref={(c) => this.comment = c} required placeholder="If you would like to comment, please log in."  />
                              
                      </Form.Group>


                      <Form.Group>
                          <Button variant="success" disabled type="submit">Send</Button>
                      </Form.Group>
                  </Form>
              </Col>
          </Row>
        

          <Table className="mt-4 " striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>Comment</th>
                        <th>name</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {emps.map(emp=>
                     <tr Key={emp.user}>
                     <td>{emp.commentdescription}</td>
                  
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