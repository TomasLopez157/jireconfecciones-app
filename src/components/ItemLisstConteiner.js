import React, {Component} from "react";
import carWidget from "./carWidget";



class ItemLisstConteiner extends Component {

    constructor(){
        super();
        this.state = {
            name:"Lopez"
        }
    }

    dataClick = (params)=>{
        this.setState({click:"Tomas"})
        console.log(this.state);
    }

    render(){
        return(
            <>
                <carWidget.TitLabel text={this.state.click}></carWidget.TitLabel>
                <carWidget.TitLabel text={this.state.name}></carWidget.TitLabel>
                <carWidget.ButtonSubmit onClick={this.dataClick} ></carWidget.ButtonSubmit>
            </>
        )
    }
}
export default ItemLisstConteiner;