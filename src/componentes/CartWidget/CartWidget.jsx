import './CartWidget.css'

const CartWidget = (props) => {
const {contador} = props
    return (
        <div className='CartWidget' class='CartWidget'>
            <i class="fa-solid fa-cart-shopping"></i>
            <div class='Contador'>{contador}</div>
        </div>
    )
} 

export default CartWidget;