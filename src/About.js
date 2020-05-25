import React from "react";
import Video3 from "./media/Video3.mp4";
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import {Redirect} from "react-router-dom";
class About extends React.Component {
    constructor(props){
        super(props)   
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token === null){
            loggedIn = false
        }
        this.state={
            loggedIn
        }
    }
      render(){  
        if(this.state.loggedIn === true){
          return(<Redirect to ="/dashboard"/>);
        } 
        
        return(
            <div className = "image">
                <NavBar/>
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
                    <source src = {Video3} type = "video/mp4" />
                </video>
            <div className="Runtime">
                <h2>Team Runtime Terror!</h2>
                <br></br>
                <p>We, Runtime Terror Team has worked on our first project. We're a team of 4 students studying Information Science and Engineering in Dayananda Sagar College of Engineering in Bangalore.</p>
                <p>We have built this web-app, using ReactJS with CSS for front-end , api using nodejs and postgres SQL for the back-end. This is just a demo-project, and we've used Approximate values for all the distances. </p>
                <h4>Web Developers:</h4>
                <ul className="Names">
                    <li>Rithik Dutt</li>
                    <li>Kedar Hegde</li>
                    <li>Rahul B V</li>
                    <li>Sandesh S Hegde</li>
                </ul>
                </div>
                
        <div className= "about"><h1>About Us!</h1></div>
        <div className="bullets">
            <h2>About DSCE!</h2>
            <br></br>
            <p>Dayananda Sagar College of Engineering is approved by All India Council for Technical Education (AICTE), Govt. of India and affiliated to Visvesvaraya Technological University. It has widest choice of engineering branches having 15 Under Graduate courses & 13 Post Graduate courses. In addition, it has 20 Research Centres in different branches of Engineering catering to research scholars for obtaining Ph.D under VTU. Various courses are accredited by NBA.</p>

    <p>The Institute is spread over 29 acres of land with large infrastructure supported by laboratories with state-of-the-art, Equipment & Machines. The Central Library with modern facilities and the Digital Library provides the knowledge base for the students.</p>
        <p>The campus is WI-FI equipped with large bandwidth internet facility. The College has good faculty strength with highest professional integrity and committed to the academics with transparency in their actions.Each faculty takes the responsibility of mentoring a certain number of students’ through personal attention paving the way for the students’ professional growth. </p>
        </div>
        <Footer/>
        </div>
        );
                }
}
export default About;
