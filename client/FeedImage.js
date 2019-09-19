import React, { Component } from 'react';

class FeedImage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <img id="image" src={this.props.images} />
        )
    }
}

export default FeedImage;
