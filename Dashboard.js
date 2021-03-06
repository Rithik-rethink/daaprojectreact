import React from "react";
import NavBar2 from "./components/NavBar2";
import Dashboard2 from "./components/Dashboard2";
import Footer from "./components/Footer";
import {Redirect} from "react-router-dom";
import {Spinner} from "reactstrap";
class Account extends React.Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token === null){
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn === false){
            return(<Redirect to ="/login"/>);
        }
        return(
            <React.Suspense fallback={<Spinner />}>
            <div className="account">
                <NavBar2/>
                <Dashboard2/>
                <Footer/>
            </div>
            </React.Suspense>
        );
    }
}

export default Account;