import React from 'react';
import * as ReactBoostrap from 'react-bootstrap';
class Error extends React.Component {
    render() {
        return(
            <div className = "error">
                <h1>Oops! Something Wrong Happened!</h1>
                <h5>Check the email or password, and try again!</h5>
                <ReactBoostrap.Button variant = 'outline-primary' href = '/login'>Go Back</ReactBoostrap.Button>
            </div>
        )
    }
}

export default Error;