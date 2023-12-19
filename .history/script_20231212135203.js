document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const modalImage = document.getElementById("modal-image");
    const cartCount = document.getElementById("cart-count");
    const cartDropdown = document.getElementById("cart-dropdown");

    let itemCount = 0;

    function updateCartCount() {
        cartCount.textContent = itemCount;
    }

    function addItemToCart(item) {
        itemCount++;
        updateCartCount();
        cartItems.push(item);
        showItemAddedMessage();
        displayCart(cartItems);
    }

    function showItemAddedMessage() {
        alert('Item added to cart!');
    }

    function displayCart(cart) {
        // Your code to display the cart items in the UI
    }

    function addImageToCartContainer(imageSrc) {
        var cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        var cartImage = document.createElement('img');
        cartImage.src = imageSrc;
        cartItem.appendChild(cartImage);
        cartDropdown.appendChild(cartItem);
    }

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
                const cardDetails = {
                    // Extract the relevant details from the card for the cart
                    // For example: image, title, price
                };
                addItemToCart(cardDetails);
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
});
