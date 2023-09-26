function Content(){
    return(
        <section className="container">
      <h2 className="section-header">cars</h2>
      <div className="shop-items">
        <div className="shop-item">
          <span className="shop-item-title">mercedes</span>
          
          <div className="shop-item-details">
            <span className="shop-item-price">$122,000.00</span>
            <button className="btn btn-primary shop-item-button" type="button">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="shop-item">
          <span className="shop-item-title">audi</span>
          <div className="shop-item-details">
            <span className="shop-item-price">$80,000.00</span>
            <button className="btn btn-primary shop-item-button" type="button">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="shop-item">
          <span classNames="shop-item-title">ferrari</span>
          <div className="shop-item-details">
            <span className="shop-item-price">$200,000.00</span>
            <button className="btn btn-primary shop-item-button" type="button">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="shop-item">
          <span className="shop-item-title">bmw</span>
          <div className="shop-item-details">
            <span className="shop-item-price">$90,000.00</span>
            <button className="btn btn-primary shop-item-button" type="button">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
    );
}
export default Content;