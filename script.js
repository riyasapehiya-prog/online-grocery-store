 const products = [
    {name: "Apple", price: 120, category: "Fruits", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400"},
    {name: "Banana", price: 50, category: "Fruits", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400"},
    {name: "Orange", price: 80, category: "Fruits", image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400"},
    {name: "Mango", price: 100, category: "Fruits", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400"},
    {name: "Grapes", price: 90, category: "Fruits", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400"},
    {name: "Strawberry", price: 150, category: "Fruits", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400"},

    {name: "Potato", price: 30, category: "Vegetables", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400"},
    {name: "Tomato", price: 40, category: "Vegetables", image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400"},
    {name: "Carrot", price: 60, category: "Vegetables", image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400"},
    {name: "Onion", price: 35, category: "Vegetables", image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400"},
    {name: "Broccoli", price: 80, category: "Vegetables", image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400"},

    {name: "Milk", price: 60, category: "Dairy", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400"},
    {name: "Cheese", price: 150, category: "Dairy", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400"},
    {name: "Butter", price: 55, category: "Dairy", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400"},
    {name: "Curd", price: 40, category: "Dairy", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400"},

    {name: "Rice", price: 70, category: "Grocery", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400"},
    {name: "Bread", price: 40, category: "Grocery", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"},
    {name: "Cooking Oil", price: 140, category: "Grocery", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400"},

    {name: "Biscuits", price: 30, category: "Snacks", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400"},
    {name: "Chips", price: 20, category: "Snacks", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400"}
];

let cart = [];

function displayProducts(items) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    items.forEach((product) => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <button onclick="addToCart('${product.name}')">
                    Add to Cart
                </button>
            </div>
        `;
    });

    if (items.length === 0) {
        container.innerHTML = "<p>No products found.</p>";
    }
}

function filterProducts(category) {
    if (category === "All") {
        displayProducts(products);
    } else {
        const filtered = products.filter(
            product => product.category === category
        );
        displayProducts(filtered);
    }
}

function addToCart(name) {
    const product = products.find(item => item.name === name);
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({...product, quantity: 1});
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    const countElement = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        count += item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name} x ${item.quantity}</span>
                <span>₹${item.price * item.quantity}</span>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    totalElement.textContent = total;
    countElement.textContent = count;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    document.getElementById("order-form").style.display = "block";
}

function confirmOrder() {
    const name = document.getElementById("customer-name").value.trim();
    const phone = document.getElementById("customer-phone").value.trim();
    const address = document.getElementById("customer-address").value.trim();

    if (!name || !phone || !address) {
        alert("Please fill all customer details!");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10 digit mobile number!");
        return;
    }

    alert("Thank you " + name + "! Your demo order has been placed.");

    cart = [];
    updateCart();

    document.getElementById("order-form").style.display = "none";
    document.getElementById("customer-name").value = "";
    document.getElementById("customer-phone").value = "";
    document.getElementById("customer-address").value = "";
}

document.getElementById("search").addEventListener("input", function() {
    const value = this.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);
});

displayProducts(products);