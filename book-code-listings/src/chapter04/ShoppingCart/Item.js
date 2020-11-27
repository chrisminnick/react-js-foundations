import React from 'react';

function Item(props){
    const handleClick = (e)=>{
        this.props.removeFromCart(props.id);
    };

    return(
        <div>
            {props.title} - {props.price}
            <button onClick={handleClick}>remove</button>
        </div>
    );
}

export default Item;
