


export const Modal = ({ order ,total}) => {
  console.log(order)

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <img src="./images/icon-order-confirmed.svg" alt="" />
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food</p>
        </div>
        <div className="modal-body">
          {
            order.map(order =>
            {  return(
                <div className="order-product" key={order.id}>
                <img src={order.image.thumbnail} alt="" />
                <div className="order-desc">
                  <p>{order.name} </p>
                  <span>{order.times}x</span>
                  <span>@${order.price}</span>
                </div>
                <span className="order-product-total">${order.total}</span>
              </div>
              )}
            )
          }
         
          {/* <div className="order-product">
            <img src="./images/image-baklava-thumbnail.jpg" alt="" />
            <div className="order-desc">
              <p>Classic Tiramisu </p>
              <span>1x</span>
              <span>@$7.00</span>
            </div>
            <span className="order-product-total">$5.70</span>
          </div>
          <div className="order-product">
            <img src="./images/image-baklava-thumbnail.jpg" alt="" />
            <div className="order-desc">
              <p>Classic Tiramisu </p>
              <span>1x</span>
              <span>@$7.00</span>
            </div>
            <span className="order-product-total">$5.70</span>
          </div>
          <div className="order-product">
            <img src="./images/image-baklava-thumbnail.jpg" alt="" />
            <div className="order-desc">
              <p>Classic Tiramisu </p>
              <span>1x</span>
              <span>@$7.00</span>
            </div>
            <span className="order-product-total">$5.70</span>
          </div> */}
        </div>
        <div className="modal-footer">
          <div className="order-total modal-total">
            <p>Order Total</p>
            <strong>${total}</strong>
          </div>
          <p className="confirm" onClick={()=>window.location.reload()} >Start New Order</p>

        </div>
      </div>

    </div>
  )
}