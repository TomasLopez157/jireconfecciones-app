import React, {Component} from "react";

class Sheell extends Component{
    componentDidMount(){
        console.log("holas")
    }
    render(){
        return(
            <header>
                <h2>{this.props.tomasito}</h2>
            </header>
        )
    }
}

export default Sheell; 