import React from 'react';
import "../Enterprise.css";

class Enterprise extends React.Component {

    constructor (){
        super();
        this.state = {};
    }

    render(){
        return (

            <div>
                <header className="enterprise-page"></header>
                <br />
                <img width="100%" src="https://i.pinimg.com/originals/c0/0a/0f/c00a0f2556d78284dc3b23a8df6b5dc5.png"/>
                <img src="https://vignette.wikia.nocookie.net/azur-lane/images/4/40/Enterprise.png/revision/latest?cb=20201117235025"/>
                <br />
            </div>
        );
    }
}

export default Enterprise;