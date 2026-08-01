function FeatureCart(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="card h-100 shadow">
          <div className="card-body">
            <h3>{props.type}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureCart;
