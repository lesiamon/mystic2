document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const closeButton = document.querySelector(".close-button");
    const modalImage = document.getElementById("modal-image");
    const cartCount = document.getElementById("cart-count");

    let itemCount = 0;
    let cartItems = []; // Array to store information about items in the cart

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
                modalImage.classList.add("rotate-180");
                addItemToCart(card); // Pass the card element to store information
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

    function addItemToCart(card) {
        // Extract information about the item from the card and add it to the cartItems array
        const item = {
            id: card.dataset.itemId, // Assuming each card has a data attribute 'data-item-id'
            name: card.querySelector(".item-name").textContent, // Adjust based on your HTML structure
            price: card.querySelector(".item-price").textContent // Adjust based on your HTML structure
        };

        cartItems.push(item);
        itemCount++;
        updateCartCount();
        showItemAddedMessage();
    }

    function updateCartCount() {
        cartCount.textContent = itemCount;
    }

    function showItemAddedMessage() {
        // You can customize this function to display a message or perform other actions
        alert('Item added to cart!');
        // You can also modify the DOM to update the UI or perform other actions
        // For example, update a message in the HTML or show a notification
    }

    // Additional functions for buying via different options...
});
