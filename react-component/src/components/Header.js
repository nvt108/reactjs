import React, { Component } from 'react'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {detail: 'This is Class component'}
    }

    render(){
        return (
            <div className="header">
                <h1>This is {this.props.title} Component</h1>
                <h4>{this.state.detail}</h4>
            </div>
        )
    }
}

export default Header;