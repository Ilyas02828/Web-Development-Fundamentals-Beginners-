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

const products = [
  {
    name: "Wireless Headphones",
    price: 120,
    imageNumber: "1",
  },
  {
    name: "Smart Watch",
    price: 220,
    imageNumber: "2",
  },
  {
    name: "Gaming Mouse",
    price: 60,
    imageNumber: "3",
  },
  {
    name: "Color Printer",
    price: 250,
    imageNumber: "4",
  },
  {
    name: "AC/DC Fan",
    price: 70,
    imageNumber: "5",
  },
  {
    name: "Scanner",
    price: 40,
    imageNumber: "6",
  },
  {
    name: "Core i5 HP Laptop",
    price: 400,
    imageNumber: "7",
  },
  {
    name: "Wireless Keyboard",
    price: 20,
    imageNumber: "8",
  },
];

function displayProducts() {
  const productsContanier = document.getElementById("products-container");

  products.forEach((product) => {
    productsContanier.innerHTML += `
      <div class="col-md-6 col-lg-3">
        <div class="card h-100">
            <img src="https://picsum.photos/300?${product.imageNumber}" class="card-img-top">
            <div class="card-body">
                <h5>${product.name}</h5>
                <p>$${product.image}</p>

                <button class="btn btn-outline-primary add-cart"> Add to Cart </button>
            </div>
        </div>
      </div>
    `;
  });
}

displayProducts();
