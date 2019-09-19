import React, { Component } from 'react';
import styles from "./styles.scss";
import FeedImage from "./FeedImage";


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            images: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.approveClick = this.approveClick.bind(this);
    }

    componentDidMount(){
        fetch("/api")
            .then(res => res.json())
            .then(data => this.setState({images: data}))
            .catch(e => console.log("ERR in FEtch",e))
    }

    handleClick () {
        console.log("button clicked")
        fetch("/api")
            .then(res => res.json())
            .then(data => this.setState({images: data}))
            .catch(e => console.log("ERR in FEtch",e))
    }
    approveClick(){
        fetch("/api")
            .then(res => res.json())
            .then(data => this.setState({images: data}))
            .catch(e => console.log("ERR in FEtch",e))
    }

    render() {
        // console.log("r",this.state);
        const feed = [];


        for(let i = 0; i < this.state.images.length; i++){
            console.log('s',this.state.images[0]);
            let x = Math.floor(Math.random() * 20);
            feed.push(<FeedImage images={this.state.images[3]} />)
        }
        return (
            <div className="app">
                <div className="heading">
                    <h1>Dinder</h1>
                </div>
                <FeedImage id="image" images={this.state.images[Math.floor(Math.random() * 20)]} />
                <div className="buttons">
                    <button onClick={this.handleClick}> NO!</button>
                    <button onClick={this.approveClick}> YES!</button>
                </div>
            </div>
        )
    }
}

export default App;
