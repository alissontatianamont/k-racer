import ItemCount from './ItemCount'
import './nav.css'

function ItemListContainer ({greeting})  { 
     return <>
        <p className="parrafo">{greeting}</p>
        <ItemCount stock={20} intial={1} onAdd={"GRACIAS POR SU COMPRA :D"}/>
        </>
    }
export default ItemListContainer