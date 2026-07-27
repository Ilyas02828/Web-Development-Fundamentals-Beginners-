const state = {
  cart: [],
};

const savedCart = localStorage.getItem("cart");
if (savedCart) {
  state.cart = JSON.parse(savedCart);
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(state.cart));
}

function renderCart() {
  const cartList = document.getElementById("cartList");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  cartList.innerHTML = "";
  let total = 0;

  state.cart.forEach((item, index) => {
    total += item.price;

    cartList.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <strong>${item.name}</strong>
                <br>
                $${item.price}
            </div>

            <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">
                Remove
            </button>
        </li>
        `;
  });

  cartCount.textContent = state.cart.length;
  cartTotal.textContent = "$" + total;
}

const buttons = document.querySelectorAll(".add-cart");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const name = card.querySelector("h5").textContent;
    const price = Number(card.querySelector("p").textContent.replace("$", ""));

    state.cart.push({
      name,
      price,
    });

    saveCart();
    renderCart();
  });
});

function removeItem(index) {
  state.cart.splice(index, 1);
  saveCart();
  renderCart();
}
