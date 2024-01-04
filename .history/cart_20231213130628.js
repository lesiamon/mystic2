document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout");
  
    // Sample products array
    var products = [
      {
        name: "Phone A",
        price: 500,
        image: "path/to/phone_a.jpg"
      },
      {
        name: "Phone B",
        price: 700,
        image: "path/to/phone_b.jpg"
      },
      {
        name: "Phone C",
        price: 900,
        image: "path/to/phone_c.jpg"
      },
      // Add more products as needed
    ];
  
    let total = 0;
  
    function displayProducts() {
      // Clear the existing cart items
      cartItems.innerHTML = "";
  
      // Loop through the products array
      for (var i = 0; i < products.length; i++) {
        // Create a list item for each product
        var li = document.createElement("li");
        // Create an image element and set its src attribute
        var img = document.createElement("img");
        img.src = products[i].image;
        // Create a span element and set its text content
        var span = document.createElement("span");
        span.textContent = products[i].name + " - $" + products[i].price.toFixed(2);
        // Append the image and span to the list item
        li.appendChild(img);
        li.appendChild(span);
        // Append the list item to the cart items element
        cartItems.appendChild(li);
      }
  
      // Update the cart total
      updateCartTotal();
    }
  
    function addToCart(product) {
      // Add the product price to the total
      total += product.price;
      // Update the cart total element
      updateCartTotal();
    }
  
    function updateCartTotal() {
      // Update the cart total element
      cartTotal.innerHTML = "Total: $" + total.toFixed(2);
    }
  
    function checkout() {
      // Implement your checkout logic here
      alert("Checkout button clicked. Implement your checkout logic!");
    }
  
    // Call the displayProducts function when the page loads
    displayProducts();
  
    // Attach click event to the checkout button
    checkoutButton.addEventListener("click", checkout);
  });
  