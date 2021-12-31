import React, {Component} from "react";
import carWidet from "./carWidget";

class itemListConteiner extends Component {

    render(){
        return(
            <>
                <carWidet.TitLabel text="Hola"></carWidet.TitLabel>
                <carWidet.TitLabel text="Chau"></carWidet.TitLabel>
                <carWidet.ButtonSubmit ></carWidet.ButtonSubmit>
            </>
        )
    }
}
export default itemListConteiner;