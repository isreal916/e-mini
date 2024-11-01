  import { useContext } from "react"
import { stateContext } from "../../App";

  export const Cart =({product})=>{
    let stateContexts = useContext(stateContext);

const removeCart =()=>{
  stateContexts.stateDispatch({type:'DELETE-ITEM',payload:product.id})
  stateContexts.dataDispatch({type:'remove-incart',payload:product.id})

}

    return(
      <div className="cart-product">
      <p>{product.name} </p>

      <span>{product.times}x</span>
      <span>@${product.price}</span>
      <span>${product.total}</span>
      <img src="./images/icon-remove-item.svg" alt="" onClick={removeCart}/>
    </div>
    )
  }