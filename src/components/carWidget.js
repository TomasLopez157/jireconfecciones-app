import carrito from "./ftl/img/carrito.jpg"

const carWidget= {
    ButtonSubmit : (props)=>(<button onClick={props.onClick}><img className="imgCarrito" src={carrito}/></button>),
    TitLabel : ({text})=> (<h3>{text}</h3>),
}
export default carWidget;

