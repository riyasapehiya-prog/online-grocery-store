 const products = [
    // FRUITS
    {name: "Apple (1 kg)", price: 160, category: "Fruits", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400"},
    {name: "Banana (1 dozen)", price: 50, category: "Fruits", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400"},
    {name: "Orange (1 kg)", price: 80, category: "Fruits", image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400"},
    {name: "Mango (1 kg)", price: 120, category: "Fruits", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400"},
    {name: "Grapes (500 g)", price: 60, category: "Fruits", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400"},
    {name: "Pomegranate (1 kg)", price: 140, category: "Fruits", image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?w=400"},
    {name: "Papaya (1 kg)", price: 50, category: "Fruits", image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=400"},
    {name: "Watermelon (1 pc)", price: 60, category: "Fruits", image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400"},

    // VEGETABLES
    {name: "Potato (1 kg)", price: 30, category: "Vegetables", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400"},
    {name: "Tomato (1 kg)", price: 40, category: "Vegetables", image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400"},
    {name: "Onion (1 kg)", price: 35, category: "Vegetables", image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400"},
    {name: "Carrot (1 kg)", price: 50, category: "Vegetables", image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400"},
    {name: "Cucumber (1 kg)", price: 40, category: "Vegetables", image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400"},
    {name: "Cauliflower (1 pc)", price: 35, category: "Vegetables", image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=400"},
    {name: "Spinach (1 bunch)", price: 25, category: "Vegetables", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400"},

    // DAIRY & BREAKFAST
    {name: "Milk (1 litre)", price: 60, category: "Dairy", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400"},
    {name: "Butter (100 g)", price: 60, category: "Dairy", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400"},
    {name: "Cheese (200 g)", price: 120, category: "Dairy", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400"},
    {name: "Curd (500 g)", price: 40, category: "Dairy", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400"},
    {name: "Paneer (200 g)", price: 90, category: "Dairy", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400"},
    {name: "Eggs (6 pcs)", price: 45, category: "Dairy", image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400"},

    // SNACKS & CHOCOLATES
    {name: "Potato Chips", price: 20, category: "Snacks", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400"},
    {name: "Chocolate Bar", price: 40, category: "Snacks", image: "https://images.unsplash.com/photo-1548907040-4d42bfc8e6b3?w=400"},
    {name: "Biscuits", price: 30, category: "Snacks", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400"},
    {name: "Namkeen", price: 35, category: "Snacks", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400"},
    {name: "Popcorn", price: 40, category: "Snacks", image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400"},
    {name: "Cookies", price: 50, category: "Snacks", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400"},

    // COLD DRINKS & JUICES
    {name: "Orange Juice (1 L)", price: 110, category: "Drinks", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400"},
    {name: "Apple Juice (1 L)", price: 100, category: "Drinks", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?w=400"},
    {name: "Cold Drink (750 ml)", price: 45, category: "Drinks", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400"},
    {name: "Mineral Water (1 L)", price: 20, category: "Drinks", image: "https://images.unsplash.com/photo-1606168094336-48f205c7b2c7?w=400"},

    // BAKERY
    {name: "Bread", price: 40, category: "Bakery", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"},
    {name: "Burger Buns", price: 35, category: "Bakery", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400"},
    {name: "Rusk", price: 45, category: "Bakery", image: "https://images.unsplash.com/photo-1590080877777-b4e9b9d6d1a5?w=400"},
    {name: "Cake", price: 250, category: "Bakery", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400"},

    // RICE, ATTA & DAL
    {name: "Rice (1 kg)", price: 70, category: "Grocery", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400"},
    {name: "Wheat Atta (5 kg)", price: 220, category: "Grocery", image: "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=400"},
    {name: "Toor Dal (1 kg)", price: 140, category: "Grocery", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400"},
    {name: "Moong Dal (1 kg)", price: 120, category: "Grocery", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400"},
    {name: "Sugar (1 kg)", price: 45, category: "Grocery", image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=400"},
    {name: "Cooking Oil (1 L)", price: 150, category: "Grocery", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400"},
    {name: "Salt (1 kg)", price: 25, category: "Grocery", image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442a?w=400"},
    {name: "Tea (250 g)", price: 120, category: "Grocery", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400"},

    // PERSONAL CARE
    {name: "Shampoo", price: 120, category: "Personal Care", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400"},
    {name: "Toothpaste", price: 55, category: "Personal Care", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400"},
    {name: "Bath Soap", price: 40, category: "Personal Care", image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400"},
    {name: "Handwash", price: 75, category: "Personal Care", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400"},

    // HOUSEHOLD
    {name: "Dishwash Liquid", price: 90, category: "Household", image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400"},
    {name: "Detergent Powder", price: 110, category: "Household", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400"},
    {name: "Floor Cleaner", price: 95, category: "Household", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400"},
    {name: "Tissue Paper", price: 50, category: "Household", image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=400"}
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

showCartMessage(name);
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
    let discount = 0;

if (!localStorage.getItem("freshmartFirstOrder")) {
    discount = 50;
    localStorage.setItem("freshmartFirstOrder", "yes");
}
let total = cart.reduce(
    (sum, item) => sum + (item.price * item.quantity), 0
);
    const distance = document.getElementById("customer-distance").value;

if (!distance) {
    alert("Please select your delivery distance!");
    return;
}

let deliveryCharge = 0;
let deliveryTime = "";

if (distance === "5") {
    deliveryCharge = 0;
    deliveryTime = "10-15 minutes";
} else if (distance === "10") {
    deliveryCharge = 59;
    deliveryTime = "20 minutes";
} else {
    deliveryCharge = 59;
    deliveryTime = "30 minutes";
}
let finalTotal = Math.max(0, total + deliveryCharge - discount);
alert(
    "Thank you " + name +
    "!\nProduct Total: ₹" + total +
    "\nDelivery Charges: ₹" + deliveryCharge +
    "\nDelivery Time: " + deliveryTime +
    "\nWelcome Discount: ₹" + discount +
    "\nFinal Amount: ₹" + finalTotal
);

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
// FreshMart Demo Login

function loginUser() {
    const name = document.getElementById("login-name").value.trim();
    const phone = document.getElementById("login-phone").value.trim();
    const password = document.getElementById("login-password").value;

    const message = document.getElementById("login-message");

    if (!name || !phone || !password) {
        message.innerText = "Please fill all details!";
        message.style.color = "red";
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        message.innerText = "Enter a valid 10-digit mobile number!";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.innerText = "Password must be at least 6 characters!";
        message.style.color = "red";
        return;
    }

    localStorage.setItem("freshmartUser", name);

    document.getElementById("login-page").style.display = "none";
    message.innerText = "";
}
function showCartMessage(name) {
    let toast = document.getElementById("cart-toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "cart-toast";
        document.body.appendChild(toast);
    }

    toast.innerText = "✓ " + name + " Added to Cart!";
    toast.style.display = "block";

    clearTimeout(window.cartToastTimer);
    window.cartToastTimer = setTimeout(() => {
        toast.style.display = "none";
    }, 2500);
}
