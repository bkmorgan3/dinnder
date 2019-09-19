import React, { Component } from 'react';
import styles from "./styles.scss";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    componentDidMount(){

    }

    render(){
        return (
            <div className="app">
                <div className="heading">
                    <h1>Dinder</h1>
                </div>
                <div className="signin">
                    <h3> Please Sign up or Login to Continue</h3>
                </div>
            </div>
        )
    }
}

export default App;
