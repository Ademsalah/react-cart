function Shopping(){
    return(
        <section className="container content-section">
      <h2 className="section-header">CART</h2>
      <div className="cart-row">
        <span className="cart-item cart-header cart-column">ITEM</span>
        <span className="cart-price cart-header cart-column">PRICE</span>
        <span className="cart-quantity cart-header cart-column">QUANTITY</span>
      </div>
      <div className="cart-items">
        <div className="cart-row">
          <div className="cart-item cart-column">
            
            <span className="cart-item-title">porshe</span>
          </div>
          <span className="cart-price cart-column">$150,000.00</span>
          <div className="cart-quantity cart-column">
            <input className="cart-quantity-input" type="number" value="1" />
            <button className="btn btn-danger" type="button">REMOVE</button>
          </div>
        </div>
        <div className="cart-row">
          <div className="cart-item cart-column">
            
            <span className="cart-item-title">ferrari</span>
          </div>
          <span className="cart-price cart-column">$200,000.00</span>
          <div className="cart-quantity cart-column">
            <input className="cart-quantity-input" type="number" value="2" />
            <button className="btn btn-danger" type="button">REMOVE</button>
          </div>
        </div>
      </div>
      <div className="cart-total">
        <strong className="cart-total-title">Total</strong>
        <span className="cart-total-price">$550000.00</span>
      </div>
      <button className="btn btn-primary btn-purchase" type="button">
        PURCHASE
      </button>
    </section>
    );
}
export default Shopping ;