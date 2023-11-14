<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Your existing head content here -->
</head>
<body>
    <header>
        <!-- Search Bar and Cart -->
        <div class="search-bar">
            <input type="text" class="search-input" id="search" placeholder="Search...">
            <select class="search-dropdown" id="category">
                <option value="all">All Categories</option>
                <option value="mobile">Mobile Phones</option>
                <option value="television">Television</option>
                <!-- Add more options as needed -->
            </select>
            <a href="your-search-action.html">
                <i class="fa fa-search search-icon" aria-hidden="true"></i> <!-- Font Awesome search icon -->
            </a>
            <div class="cart-count" id="cart-count">0</div>
            <a href="your-cart-action.html" class="cart-link">
                <i class="fa fa-shopping-cart cart-icon" aria-hidden="true"></i> <!-- Font Awesome cart icon -->
            </a>
        </div>
    </header>

    <!-- Your product cards -->
    <div class="card card-1" data-product-id="1">
        <!-- Card content goes here -->
        <div class="add-to-cart">
            <button class="add-button" onclick="addToCart(1)">Add to Cart</button>
        </div>
    </div>

    <div class="card card-2" data-product-id="2">
        <!-- Card content goes here -->
        <div class="add-to-cart">
            <button class="add-button" onclick="addToCart(2)">Add to Cart</button>
        </div>
    </div>
    <!-- Add more product cards here -->

    <!-- Cart display -->
    <div class="cart" id="cart">
        <!-- Cart content goes here -->
    </div>

    <script>
        // Initialize cart data
        const cart = {};

        // Function to add a product to the cart
        function addToCart(productId) {
            // Check if the product is already in the cart
            if (cart[productId]) {
                cart[productId]++;
            } else {
                cart[productId] = 1;
            }

            // Update the cart count in the header
            const cartCount = document.getElementById("cart-count");
            cartCount.innerText = Object.values(cart).reduce((total, count) => total + count, 0);

            // Update the cart display (you can customize this part)
            const cartDisplay = document.getElementById("cart");
            cartDisplay.innerHTML = "<h2>Shopping Cart</h2>";
            for (const [productId, count] of Object.entries(cart)) {
                const productCard = document.querySelector(`.card[data-product-id="${productId}"]`);
                cartDisplay.innerHTML += `<p>${productCard.textContent.trim()} x${count}</p>`;
            }
        }
    </script>
</body>
</html>
