import Carrito from "./ftl/img/Carrito3.jpg";

const carWidget= {
    ButtonSubmit : (props)=>(<button className="btnCarrito" onClick={props.onClick}><img className="imgCarrito" src={Carrito} alt="Carrito"/></button>),
    TitLabel : ({text})=> (<h3>{text}</h3>),

}
export default carWidget;

