function Cart(props) {
  return (
    <div class="card">
      <h2>{props.title}</h2>
      <h3>${props.price}/mo</h3>
      <p>{props.storage} Storage</p>
      <p>{props.functionality} Support</p>
      <button>Choose Plan</button>
    </div>
  );
}

export default Cart;
