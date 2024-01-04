document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const modalImage = document.getElementById("modal-image");
    const cartCount = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-button");

    let itemCount = 0;
    let cartItems = [];

    function updateCartCount() {
        cartCount.textContent = itemCount;
    }

    function addItemToCart(item) {
        itemCount++;
        cartItems.push(item);
        updateCartCount();
        showItemAddedMessage();
        displayCart(cartItems);
    }

    function showItemAddedMessage() {
        alert('Item added to cart!');
    }

    function displayCart(cart) {
        // Your code to display the cart items in the UI
    }

    cards.forEach((card, index) => {
        const addToCartButton = card.querySelector(".add-button");
        if (addToCartButton) {
            addToCartButton.addEventListener("click", function () {
                const cardDetails = {
                    // Extract the relevant details from the card for the cart
                    // For example: image, title, price
                };
                addItemToCart(cardDetails);
            });
        }

        card.addEventListener("click", function () {
            modal.style.display = "block";
            // Update modal content based on the clicked card if needed
        });

        card.addEventListener("mouseenter", function () {
            card.style.transform = "scale(1.1)";
            card.style.zIndex = "1";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "scale(1)";
            card.style.zIndex = "0";
        });
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modalImage.addEventListener("click", function () {
        modalImage.classList.toggle("rotate-180");
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
