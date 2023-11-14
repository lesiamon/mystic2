document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const closeButton = document.querySelector(".close-button");
    const modalImage = document.getElementById("modal-image");
    const addToCartButton = document.querySelector(".add-to-cart-button");
    const cart = [];

    const cartCount = document.getElementById("cart-count");

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

        const buyButton = card.querySelector(".buy-button");
        if (buyButton) {
            buyButton.addEventListener("click", function () {
                openBuyModal();
                modalImage.classList.add("rotate-360");
            });
        }
    });

    addToCartButton.addEventListener("click", function () {
        addToCart();
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        modalImage.classList.remove("rotate-360");
    });

    modalImage.addEventListener("click", function () {
        modalImage.classList.toggle("rotate-360");
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalImage.classList.remove("rotate-360");
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

    function addToCart() {
        cart.push(modalContent.innerHTML);
        updateCartCount(); // Update the cart count
        closeBuyModal(); // Close the modal after adding to the cart
    }

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // You can further enhance this code to manage cart items and display them when the cart icon is clicked.
});
