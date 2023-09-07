import './ItemListContainer.css'

const ItemListContainer = (props) => {
const {texto} = props
    return (
        <h1 className='ItemListContainer' class='ItemListContainer'>
            {texto}
        </h1>
    )
} 

export default ItemListContainer;