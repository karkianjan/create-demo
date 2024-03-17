import React, { Component } from 'react'




class Array extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log(this.props.card)
        return (
            <div >
                <h1>Brand:{this.props.card.name}</h1>
                <h1>Company:{this.props.card.company}</h1>
                <h1>isValidate:{this.props.card.isValidate}</h1>
                <h1>Launch Date:{this.props.card.launch}</h1>
            </div>
        )
    }
}

export default Array
