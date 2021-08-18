import React, {useState} from 'react';
import Item from './Item.js';



function CartItems (props){
    const [inCart] = useState(props.inCart);

    let ItemList = inCart.map((item)=>{
        return <div>item: <Item key={item.id} {...item} /></div>
    });
    
    return(
        <div>
            Here are the items in your cart:
            {ItemList}
        </div>
    );
}
CartItems.defaultProps = {
    inCart: [{id:1,title:"React JS Foundations",price:5}]
  };

export default CartItems;