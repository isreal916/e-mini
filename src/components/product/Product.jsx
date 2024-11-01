import React, { useContext, useState } from "react";
import { stateContext } from "../../App";


export default function Product({ product }) {
  const [incart, setIncart] = useState(false);
  const [ItemTimes,setItemTimes] = useState(1);
  let stateContexts = useContext(stateContext);

  const addtoCart = (id)=>{
    
    
    setItemTimes(1)
    
stateContexts.stateDispatch({type:'ADD-ITEM',payload:{...product , times:1}});
stateContexts.dataDispatch({type:'add-incart',payload:product.id})

setIncart(prev => !prev)

  }
  const itemTimes = (type)=>{
if(type == 'add'){
  setItemTimes(prev => prev +1);
  
  stateContexts.stateDispatch({type:'INCREASE-TIMES',payload:{id:product.id,times:ItemTimes}})
}
else{
  setItemTimes(prev => prev -1);  
  stateContexts.stateDispatch({type:'DECREASE-TIMES',payload:{id:product.id,times:ItemTimes}})

}
  }

  return (

    <div className="product">
      <img
        src={product.image.mobile}
        className={`product-img ${product.incart ? 'active' : ''}`} alt=""/>
      {product.incart ? <div className="product-add">
        <img src="./images/icon-increment-quantity.svg" alt=""onClick={()=>itemTimes('add')} />
        <span>{ItemTimes}</span>
        <img src="./images/icon-decrement-quantity.svg" alt="" onClick={()=>itemTimes('sub')}  />
      </div> : <div className="product-action" onClick={()=> addtoCart(product.id)}><img src="./images/icon-add-to-cart.svg" alt="" /> Add to Cart</div>
      }


      <div className="product-desc">
        <p>{product.name}</p>
        <p>{product.category}</p>

        <p>${  product.price.toPrecision(3)}</p>
      </div>
    </div>

  )
}

