document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const closeButton = document.querySelector(".close-button");
    const modalImage = document.getElementById("modal-image");

    cards.forEach((card, index) => {
        card.addEventListener("click", function () {
            modalContent.innerHTML = card.innerHTML;
            modal.style.display = "block";
        });
        
        const buyButton = card.querySelector(".buy-button");
        if (buyButton) {
            buyButton.addEventListener("click", function () {
            openBuyModal();
                modalImage.classList.add("rotate-360");

            });
        }
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        modalImage.classList.remove("rotate-360");
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

    function buyViaWhatsApp() {
        alert('You selected WhatsApp as your buy option.');
        closeBuyModal(); // Close the modal or perform further actions
    }

    function buyViaWebsite() {
        alert('You selected Website as your buy option.');
        closeBuyModal(); // Close the modal or perform further actions
    }

    function buyViaOthers() {
        alert('You selected Others as your buy option.');
        closeBuyModal(); // Close the modal or perform further actions
    }
});
