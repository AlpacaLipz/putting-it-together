import React, {Component} from "react";

class Display extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: props.age
        }
    }
    countAge = (e) => {this.setState({age: this.state.age + 1}) }

    render() {
        const {age} = this.state;
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>Age: {this.state.age} </p>
                <p>Hair Color: {this.props.Hcolor}</p>
                <button onClick={(this.countAge)}>Birthday Button for {this.props.name}</button>
            </div>
        );
    }
}
export default Display;