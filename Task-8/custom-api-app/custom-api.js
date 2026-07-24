const products = [
  {
    productId: "P001",
    name: "Organic Milk",
    price: 3.99,
    category: "Dairy",
    expiryDate: "2026-08-10",
  },
  {
    productId: "P009",
    name: "Cheddar Cheese",
    price: 6.49,
    category: "Dairy",
    expiryDate: "2026-09-05",
  },
  {
    productId: "P010",
    name: "Greek Yogurt",
    price: 4.25,
    category: "Dairy",
    expiryDate: "2026-08-22",
  },
  {
    productId: "P002",
    name: "Whole Wheat Bread",
    price: 2.49,
    category: "Bakery",
    expiryDate: "2026-07-29",
  },
  {
    productId: "P011",
    name: "Croissant",
    price: 2.99,
    category: "Bakery",
    expiryDate: "2026-07-28",
  },
  {
    productId: "P012",
    name: "Chocolate Muffin",
    price: 3.49,
    category: "Bakery",
    expiryDate: "2026-07-30",
  },
  {
    productId: "P003",
    name: "Potato Chips",
    price: 1.99,
    category: "Snacks",
    expiryDate: "2026-12-20",
  },
  {
    productId: "P013",
    name: "Salted Peanuts",
    price: 2.75,
    category: "Snacks",
    expiryDate: "2027-02-10",
  },
  {
    productId: "P014",
    name: "Popcorn",
    price: 2.25,
    category: "Snacks",
    expiryDate: "2027-01-15",
  },
  {
    productId: "P004",
    name: "Orange Juice",
    price: 4.5,
    category: "Beverages",
    expiryDate: "2026-09-15",
  },
  {
    productId: "P015",
    name: "Apple Juice",
    price: 3.99,
    category: "Beverages",
    expiryDate: "2026-09-18",
  },
  {
    productId: "P016",
    name: "Mineral Water",
    price: 1.25,
    category: "Beverages",
    expiryDate: "2028-07-01",
  },
  {
    productId: "P005",
    name: "Shampoo",
    price: 8.99,
    category: "Personal Care",
    expiryDate: "2029-05-01",
  },
  {
    productId: "P017",
    name: "Toothpaste",
    price: 3.49,
    category: "Personal Care",
    expiryDate: "2029-01-20",
  },
  {
    productId: "P018",
    name: "Body Wash",
    price: 6.99,
    category: "Personal Care",
    expiryDate: "2029-03-10",
  },
  {
    productId: "P006",
    name: "Laundry Detergent",
    price: 12.75,
    category: "Household",
    expiryDate: "2029-04-15",
  },
  {
    productId: "P019",
    name: "Dishwashing Liquid",
    price: 5.49,
    category: "Household",
    expiryDate: "2029-06-12",
  },
  {
    productId: "P020",
    name: "Glass Cleaner",
    price: 4.99,
    category: "Household",
    expiryDate: "2029-02-15",
  },
  {
    productId: "P007",
    name: "Basmati Rice",
    price: 15.99,
    category: "Groceries",
    expiryDate: "2028-06-01",
  },
  {
    productId: "P021",
    name: "Brown Sugar",
    price: 4.25,
    category: "Groceries",
    expiryDate: "2028-11-20",
  },
  {
    productId: "P022",
    name: "Olive Oil",
    price: 10.99,
    category: "Groceries",
    expiryDate: "2028-08-15",
  },
  {
    productId: "P008",
    name: "Dark Chocolate",
    price: 5.25,
    category: "Confectionery",
    expiryDate: "2027-01-05",
  },
  {
    productId: "P023",
    name: "Gummy Bears",
    price: 2.99,
    category: "Confectionery",
    expiryDate: "2027-03-18",
  },
  {
    productId: "P024",
    name: "Caramel Candy",
    price: 1.99,
    category: "Confectionery",
    expiryDate: "2027-04-22",
  },
];

const input = document.getElementById("categoryInput");
const button = document.getElementById("searchBtn");
const container = document.getElementById("productContainer");

function displayProducts() {
  const category = input.value.trim().toLowerCase();

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category,
  );

  container.innerHTML = "";

  if (filteredProducts.length === 0) {
    container.innerHTML = `<div class="not-found">No products found.</div>`;
    return;
  }

  filteredProducts.forEach((product) => {
    container.innerHTML += `
            <div class="card">
                <h2>${product.name}</h2>
                <p><strong>ID:</strong> ${product.productId}</p>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Expiry:</strong> ${product.expiryDate}</p>
            </div>
        `;
  });
}

button.addEventListener("click", displayProducts);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    displayProducts();
  }
});
