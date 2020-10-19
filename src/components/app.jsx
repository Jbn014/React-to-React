import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Jared made this',
            name: '',
            placeholder: 'Placeholder',
            hasLoaded: false
        }
    }

    handleInputChange = (value) => {
        this.setState({ name: value });
    }

    handleButtonClick = () => {
        this.setState({ hasLoaded: true})
    }

    componentDidMount = () => {
        this.setState({ hasLoaded: true})
    }


    render() {
        if (this.state.hasLoaded === false){
               return (
                <div>
                   <h1> Loading ... </h1>
                   <button className="button"
                   onClick= {this.handleButtonClick}
                   >
                       BUTTON
                    </button></div>
               ) 
        }
        return (

            <div>
                <h1> Welcome to React {this.state.text} </h1>
                <input 
                placeholder= {this.state.placeholder}
                value= {this.state.name}
                onChange={(event) => this.handleInputChange(event.target.value) }

                />
                <div>
                <button className="button"
                
                onClick= {this.handleButtonClick}
                >
                    BUTTON
                </button>
                </div>
            </div>
        )
    }
}



//const App = (props) => {
    //return <h1> Hello </h1>
//}
export default App

