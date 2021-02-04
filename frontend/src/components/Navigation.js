import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {Login} from './Login';
import {Register} from './Register';


export class Navigation extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, addModalShow2:false, editModalShow:false}

    }



    render(){
        let addModalClose=()=>this.setState({addModalShow:false});
        let addModalClose2=()=>this.setState({addModalShow2:false});
        return(
            <div>
            
                 <Button variant="primary" onClick={()=>this.setState({addModalShow2:true})}>Register</Button>  
                   <Button variant="primary" onClick={()=>this.setState({addModalShow:true})}>Login</Button>  
                  
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/home">Home</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/inland">Inland</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/abroad">Abroad</NavLink>

                    <NavLink className="d-inline p-2 bg-dark text-white" to="/economy">Economy</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/sport">Sport</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Login show={this.state.addModalShow} onHide={addModalClose} />
            <Register show={this.state.addModalShow2} onHide={addModalClose2} />
            </div>
        )
    }
}