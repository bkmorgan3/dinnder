import React, { Component } from 'react';
import ReactDOM from "react-dom";
import config from "../server";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div>Hi There</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("janIsAHero"))
