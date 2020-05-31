import React from 'react';
import Navbar from "./NavBar";
import Footer from "./Footer";
import logoutlogo from "../media/phone1.gif";
import * as ReactBootstrap from 'react-bootstrap';
import {FaThumbsUp} from 'react-icons/fa';
class Logout extends React.Component{
    constructor(props){
        super(props)
        
        localStorage.removeItem("token")
        
    }
    state={
        like:0
    }
    
    
    handleclick(){
        var counter = this.state.like
        counter =counter+1
        this.setState({
            like:counter
        })
        
    }
    render(){
        localStorage.setItem("logouttoken","asdasdasfdfsdfe")
        return(
            <div className='logout1'>
            <Navbar/>
                <div className = 'logout'>
                <img src = {logoutlogo} alt = 'logo' width='52%' height='1%'/>
                    <div className='classss'>    
                        You've successfully <h1>LOGGED OUT!</h1>
                        <ReactBootstrap.Button variant ="outline-primary" href = './login'>Login</ReactBootstrap.Button><br></br><br></br>
                        <ReactBootstrap.Button variant='outline-primary' onClick={this.handleclick.bind(this)}><FaThumbsUp/></ReactBootstrap.Button> {this.state.like} people have liked this!
                    </div>
                    <div className='buttons'>    
                        
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Logout;