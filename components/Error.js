import React from 'react';
import * as ReactBoostrap from 'react-bootstrap';
import errimage from '../media/stone.gif'
class Error extends React.Component {
    render() {
        return(
            <div className = "error">
                <img src = {errimage} alt='stoneage'/>
                <h1>Oops! Something Wrong Happened!</h1>
                <h5>Check the input fields, and try again!</h5>
                <ReactBoostrap.Button variant = 'outline-primary' href = '/login'>Go Back</ReactBoostrap.Button>
            </div>
        )
    }
}

export default Error;