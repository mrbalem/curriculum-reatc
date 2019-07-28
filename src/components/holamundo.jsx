import React, { Component } from 'react';

class Holamundo extends Component {
    state = {
        active: true,
    }

    handleCLick = () => {
        this.setState({
            active: !this.state.active,
        });
    }

    render() {
        return(
            <div>
            <button onClick={this.handleCLick}>ocultar</button>
            {this.state.active && 
            <h1>hola mundo</h1>
            }       
            </div>
        );
    }
}

export default Holamundo;