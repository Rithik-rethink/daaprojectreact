import React from 'react';
import Dashboard_video from '../media/Dashboard_video.mp4';
import log from '../media/logo.gif';
import * as ReactBoostrap from 'react-bootstrap';
import {Redirect} from "react-router-dom";
import load from "../media/loading.gif"
import Footer from "./Footer";
class Dashboard2 extends React.Component {
    
    state = {
        source: '',
        destination: '',
        date : '',
        classs : '',
        redirect: false,
        loading:true,
        trainno:[],
        traintype:null,
        
    }
    handleChange(event , element) {
        var value = event.currentTarget.value
        if(element === "source") {
            this.setState({
                source: value
            })
        }
        else if(element === "destination"){
            this.setState({
                destination: value
            })
        }
        else if(element === "date") {
            this.setState({
                date :value
            })
        }
        else{   
            this.setState({
                classs:value
            })
        }

    }
    handleClick2(){
        console.log(this.state.source)
        console.log(this.state.destination)
        
        this.setState({
            redirect: true
        })
        
        
    }
    handleClick(event) {
        if(this.state.source ==='' || this.state.destination==='' || this.state.date==='' || this.state.classs==='' ){
            alert("Please Enter all fields of the form");
                      
        }
        else{
            
            
            
            var data = {
                source: this.state.source,
                destination: this.state.destination,
                date: this.state.date,
                classs:this.state.classs
            }
            fetch('http://localhost:9000/dashboard', {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res);
                this.setState({
                loading:false
                })
                let posts = [res.json()];
                
                console.log(posts)
                Promise.resolve(posts)
                console.log(posts)
                this.setState({
                    Posts: posts.map((post, i) => (
                        <li key={i} className="list-group-item">{post.json}</li>
                        
                      ))
                })
                
                console.log(this.state.Posts)
                
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    render() {
        return(
            <div className='dashimage'>
                {this.state.redirect===true? <Redirect to={{pathname: "/map", state: {src: this.state.source, dest: this.state.destination,redi:this.state.redirect}}}/>:console.log(this.state)}
                
                <video
                    autoPlay
                    muted
                    loop
                    style={{
                        position:"fixed",
                        width:"100%",
                        left:"50%",
                        top:"50%",
                        bottom:"0",
                        height:"100%",
                        objectFit:"cover",
                        transform: "translate(-50%,-50%)",
                        zIndex:"-1"
                    }}
                    >
                    <source src = {Dashboard_video} type = "video/mp4" />
                </video>
                
                <div className='contain'>
                    <img src = {log} alt = 'writinglogo'/>
                    <ReactBoostrap.Form inline className = "details" >
                        <label>Source</label>
                        <ReactBoostrap.FormControl type="text" placeholder="Source e.x: Bangalore" className="source" id="inputdefault" onChange={(event) => this.handleChange(event, "source")} />
                        <label>Destination</label>
                        <ReactBoostrap.FormControl type="text" placeholder="Destination e.x: Delhi" className="destination" id = "inputdefault" onChange={(event) => this.handleChange(event, "destination")}/>
                        <label>Date of Journey</label>
                        <ReactBoostrap.FormControl type="date" placeholder="DD/MM/YYYY"
                        className="dates" onChange={(event) => this.handleChange(event, "date")}/>
                        <label>Classes</label>
                        <ReactBoostrap.FormControl type="text" placeholder="Normal/AC"
                        className="trainclass" onChange={(event) => this.handleChange(event, "classs")}/>
                        <ReactBoostrap.Button variant = "primary" className="trainbtn" onClick={this.handleClick.bind(this)}>Find Trains</ReactBoostrap.Button>
                    </ReactBoostrap.Form>
                </div>
                <div className="contain1">
                    {this.state.loading === true?<img src = {load} alt ="loading.."/>:this.Posts}
                    
                    
                    <ReactBoostrap.Button variant = "outline-success" className="mapbtn" onClick={this.handleClick2.bind(this)}>Show Map</ReactBoostrap.Button>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Dashboard2;