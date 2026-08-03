function PricingCart(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="card text-center shadow">
          <div className="card-body">
            <h3>{props.name}</h3>
            <p>${props.price} / Per Month</p>
            <button className="button btn"> Choose Plan </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingCart;
