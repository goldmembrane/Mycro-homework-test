import React from 'react'
import '../css/Item.css'


const Item = (props) => {
    return(
        <>
            <div className = 'item-wrap'>
                <span className = 'item-number'>{props.item.id}</span>
                <div className = 'item-name'>{props.item.itemName}</div>
            </div>
        </>
    )
}

export default Item