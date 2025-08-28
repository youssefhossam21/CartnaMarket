document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    function loadCart() {
        return JSON.parse(localStorage.getItem("cart")) || [];
    }

    function renderCart() {
        const cart = loadCart();
        cartContainer.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartContainer.innerHTML = `<p class="text-center">The shopping cart is empty</p>`;
            totalElement.textContent = "0";
            return;
        }

        cart.forEach((item, index) => {
            total += parseFloat(item.price) || 0;
            cartContainer.insertAdjacentHTML("beforeend", `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card p-2 shadow-sm">
                        <img src="${item.image}" class="card-img-top mb-2" style="max-height:200px; object-fit:cover;" alt="Product">
                        <h5 class="text-center mb-2">${item.price}$</h5>
                        <button class="btn btn-danger w-100 remove-item" data-index="${index}">
                            Delete from cart
                        </button>
                    </div>
                </div>
            `);
        });

        totalElement.textContent = total.toFixed(2);
    }

    document.body.addEventListener("click", function (e) {
        if (e.target.closest(".remove-item")) {
            const index = e.target.dataset.index;
            const cart = loadCart();
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    });

    renderCart();
});
