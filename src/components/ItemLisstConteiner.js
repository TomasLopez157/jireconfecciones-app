import React, {Component} from "react";
import carWidget from "./carWidget";

class ItemLisstConteiner extends Component {

    constructor(){
        super();
        this.state = {
            name:"Tomas"
        }
        
        
    }

    handleClick = (params)=>{
        this.setState({click:2})
        console.log(this.state);

    }

    render(){
        return(
            <>
                <carWidget.TitLabel text={this.state.click}></carWidget.TitLabel>
                <carWidget.TitLabel text={this.state.name}></carWidget.TitLabel>
                <carWidget.ButtonSubmit onClick={this.handleClick} ></carWidget.ButtonSubmit>
            </>
        )
    }
}
export default ItemLisstConteiner;