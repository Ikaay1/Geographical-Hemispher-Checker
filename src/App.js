import React from 'react'
import HemisphereDisplay from './HemisphereDisplay'
import './index.css'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {latitude: null, error: ""}
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude})
            },
            (error) => {
                console.log(error)
                this.setState({error: error.message})
            }
        )
    }

    render() { 
        if (this.state.latitude != null && this.state.error == ""){
            return (
                <div><HemisphereDisplay latitude={this.state.latitude}/></div>
            )
        } else if ((this.state.latitude == null && this.state.error != "")){
            return (
                <div className='load'>{this.state.error}</div>
            )
        } else {
            return (
                <div className='load'>Loading...</div>
            )
        }
    }
}

export default App;