document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const closeButton = document.querySelector(".close-button");
    const modalImage = document.getElementById("modal-image");
    const cartCount = document.getElementById("cart-count");
    const cartDropdown = document.getElementById("cart-dropdown");
    const addToCartButtons = document.querySelectorAll(".add-button");
  
    let itemCount = 0;
    let cartItems = [];
  
    cards.forEach((card, index) => {
      card.addEventListener("click", function () {
        modalContent.innerHTML = card.innerHTML;
        modal.style.display = "block";
      });
  
      card.addEventListener("mouseenter", function () {
        card.style.transform = "scale(1.1)";
        card.style.zIndex = "1";
      });
  
      card.addEventListener("mouseleave", function () {
        card.style.transform = "scale(1)";
        card.style.zIndex = "0";
      });
  
      const addButton = card.querySelector(".add-button");
      if (addButton) {
        addButton.addEventListener("click", function () {
          const imageSrc = card.querySelector("img").src;
          addItemToCart(imageSrc);
        });
      }
  
      const buyButton = card.querySelector(".buy-button");
      if (buyButton) {
        buyButton.addEventListener("click", function () {
          openBuyModal();
          modalImage.classList.add("rotate-180");
          addItemToCart(); // You can customize this function based on your needs
        });
      }
    });
  
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
      modalImage.classList.remove("rotate-180");
    });
  
    modalImage.addEventListener("click", function () {
      modalImage.classList.toggle("rotate-180");
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        modalImage.classList.remove("rotate-180");
      }
    });
  
    function openBuyModal() {
      var buyModal = document.getElementById('buyModal');
      buyModal.style.display = 'block';
    }
  
    function closeBuyModal() {
      var buyModal = document.getElementById('buyModal');
      buyModal.style.display = 'none';
    }
  
    function addItemToCart(imageSrc) {
      itemCount++;
      updateCartCount();
      addImageToCartContainer(imageSrc);
      showItemAddedMessage();
    }
  
    function updateCartCount() {
      cartCount.textContent = itemCount;
    }
  
    function addImageToCartContainer(imageSrc) {
      var cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      var cartImage = document.createElement('img');
      cartImage.src = imageSrc;
      cartItem.appendChild(cartImage);
      cartDropdown.appendChild(cartItem);
    }
  
    function showItemAddedMessage() {
      alert('Item added to cart!');
    }
  
    function buyViaWhatsApp() {
      alert('You selected WhatsApp as your buy option.');
      closeBuyModal();
    }
  
    function buyViaWebsite() {
      alert('You selected Website as your buy option.');
      closeBuyModal();
    }
  
    function buyViaOthers() {
      alert('You selected Others as your buy option.');
      closeBuyModal();
    }
  
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
  
    function displayProducts() {
      // Get the cart items element
      var cartItems = document.getElementById("cart-items");
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
        // Create a button element and set its text content and click event
        var button = document.createElement("button");
        button.textContent = "Add to cart";
        // Use a closure to pass the current product to the click handler
        button.onclick = (function (product) {
          return function () {
            // Call the addToCart function with the current product
            addToCart(product);
          };
        })(products[i]);
        // Append the image, span, and button to the list item
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(button);
        // Append the list item to the cart items element
        cartItems.appendChild(li);
      }
    }
  
    // A function to add a product to the cart
    function addToCart(product) {
      // Get the cart total element
      var cartTotal = document.getElementById("cart-total");
      // Get the current total value
      var total = parseFloat(cartTotal.innerHTML.split("$")[1]);
      // Add the product price to the total
      total += product.price;
      // Update the cart total element
      cartTotal.innerHTML = "Total: $" + total.toFixed(2);
    }
  
    // Call the displayProducts function when the page loads
    displayProducts();
  });
  