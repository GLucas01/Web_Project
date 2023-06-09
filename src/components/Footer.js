import '../styles/Footer.css'
import React from 'react'

function Footer() {
    return (
        <div class = 'footer'>
            <Clock />
        </div>
    )
}

class Clock extends React.Component {

    constructor (props) {
        super(props)
        this.state = {date : new Date()}
        this.timer = null
    }

    componentDidMount () {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }
    
    tick() {
        this.setState({date : new Date()})
    }

    render() {
        const date = new Date()
        return <div>
            <p>Nous sommes le {this.state.date.toLocaleDateString()} </p>
            <p>Il est {this.state.date.toLocaleTimeString()}</p>
        </div>
    }
}

export default Footer