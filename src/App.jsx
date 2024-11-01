import { useReducer, useState, createContext } from 'react'

import './app.scss'
import Product from './components/product/Product'
import { Cart } from './components/cart/Cart'
import { data } from './data'
import { Modal } from './components/modal/Modal'
export const stateContext = createContext()

function reducer(state, action) {
  let { type, payload } = action;
  switch (type) {
    case 'ADD-ITEM':
      const updateData = data.map(state =>
        state.id === payload.id ? { ...state, incart: true } : state
      );

      payload = { ...payload, total: payload.price * payload.times };
      return [...state, payload];
    case 'INCREASE-TIMES':
      const updatedincrease = state.map(state =>
        state.id === payload.id ? { ...state, times: payload.times + 1, total: state.price * (payload.times + 1) } : state
      );

      return updatedincrease;
    case 'DECREASE-TIMES':
      const updatedecrease = state.map(state =>
        state.id === payload.id ? { ...state, times: payload.times + 1, total: state.price * (payload.times - 1) } : state
      );

      return updatedecrease;
    case 'DELETE-ITEM':
      const deleted = state.filter(data => data.id != payload);
      console.log(payload);
      return deleted;

    default:
      return state;


  }
}
function reducers(state, action) {
  let { type, payload } = action;
  switch (type) {
    case 'add-incart':
      const updateData = state.map(state =>
        state.id === payload ? { ...state, incart: true } : state
      );
      return updateData;
    case 'remove-incart':
      const updateDatas = state.map(state =>
        state.id === payload ? { ...state, incart: false } : state
      );
      console.log(updateDatas)

      return updateDatas;

    default:
      return state;


  }
}
function App() {
  let initialState = [];

  const [cart, dispatch] = useReducer(reducer, initialState)
  const [datas, dispatchs] = useReducer(reducers, data)
  const [modal ,setModal] = useState(false);
 

  let sum = 0;

  cart.map(cart => sum += cart.total);

  return (
    <>
      <stateContext.Provider value={{ stateDispatch: dispatch, dataDispatch: dispatchs }} >
      <h1>Dessert</h1>
        <div className="main-container">
          
          <div className="container">
            {datas.map((product) => (
              <Product key={product.id} product={product} />
            ))}





          </div>
          <div className="cart">
            <h1>Your cart({cart.length})</h1>

            {
              cart.length == 0 ? <div className='empty-cart'><img src='images/illustration-empty-cart.svg' /> <p>Your added item will appear here</p></div> : cart.map((product) => (<Cart key={product.id} product={product} />))
            }
            {
              cart.length == 0 ? '' :
                <div>
                  <div className="order-total">
                    <p>Order Total</p>
                    <strong>${sum}</strong>
                  </div>
                  <div className="order-type"><img src="images/icon-carbon-neutral.svg" alt="" />
                    <p className="inline">This is a <strong>carbon-neutral</strong> delivery</p>
                  </div>
                  <p className="confirm" onClick={()=>setModal(true)}>Confirm Order</p>
                </div>
            }
          </div>
        </div>
       { modal && <Modal order={cart} total={sum} />}
      </stateContext.Provider>
    </>
  )
}

export default App
