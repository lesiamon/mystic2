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

    // A function to display the products on the page
    function displayProducts() {
        var cartItems = document.getElementById("cart-items");
        for (var i = 0; i < products.length; i++) {
            var li = document.createElement("li");
            var img = document.createElement("img");
            img.src = products[i].image;
            var span = document.createElement("span");
            span.textContent = products[i].name + " - $" + products[i].price;
            var button = document.createElement("button");
            button.textContent = "Add to cart";
            button.onclick = (function (product) {
                return function () {
                    addToCart(product);
                };
            })(products[i]);
            li.appendChild(img);
            li.appendChild(span);
            li.appendChild(button);
            cartItems.appendChild(li);
        }
    }

    function addToCart(product) {
        var cartTotal = document.getElementById("cart-total");
        var total = parseFloat(cartTotal.innerHTML.split("$")[1]);
        total += product.price;
        cartTotal.innerHTML = "Total: $" + total.toFixed(2);
    }

    // Call the displayProducts function when the page loads
    displayProducts();
});
