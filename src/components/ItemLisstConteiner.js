import React, {Component} from "react";
import carWidget from "./carWidget";
import ItemList from "./ItemList";
import Item from "./Item";


class ItemLisstConteiner extends Component {
    

    constructor(props){
        super(props);
        this.state = {
            name:"Lopez",
        }
        const data =([
        
            {id : 1 , nombre : "will", lastName : "Robinsin", img:"https://m.media-amazon.com/images/I/61SA1kQNPbL._AC_SX679_.jpg"} ,

            {id : 2 , nombre : "Peni", lastName : "Robinsin", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2bCJrKXkZSLy5afNVRCxhtwQzfjel1G5Cg4ahY2u55iWWgazAiKkaoNSM9LCqiAljuE&usqp=CAU"},

            {id : 3, nombre : "Ben", lastName : "Adler", img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSzd3Bg3Xe-Ho5EgwzKNnH9RqcKtymvkh0JhQuQbtOwhRndg7WGEPHoMdL343LU"},])

            const getItems = () =>{
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        resolve(data);
              },2000);
          });
    }
        getItems().then((data)=> console.log(data));
        }
    dataClick = (params)=>{
        this.setState({click:"Tomas"})
        console.log(this.state);
        }
    render(){
        
        return(
            <>      
                 
                <ItemList tomas={ItemList}/>
                <carWidget.TitLabel text={this.state.click}></carWidget.TitLabel>
               <carWidget.TitLabel text={this.state.name}></carWidget.TitLabel>
                <carWidget.ButtonSubmit onClick={this.dataClick} ></carWidget.ButtonSubmit>
                
            </>
        )
    }
}
export default ItemLisstConteiner; 