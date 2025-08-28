

document.addEventListener("DOMContentLoaded", function () {
    function loadProducts() {
        const saved = localStorage.getItem("products");
        if (saved) return JSON.parse(saved);
        return {
            man: [
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756285068/trendy-colour-swatches-collage_uszu0t.jpg", price: "150" },
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756285084/shoes_j8cnpm.jpg", price: "450" },
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756285609/shirt_hqewog.jpg", price: "300" },
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756285093/shoes_1_jsaexv.jpg", price: "550" },
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756284075/top-view-composition-different-traveling-elements_ywlggn.jpg", price: "1350" }
            ],
            woman: [
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756283912/974646d3-ecba-41a4-a968-d28d63eae916_vdy9bs.jpg", price: "700" },
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756283628/samples/shoe.jpg", price: "250" },
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756287489/Lantern_Sleeve_Solid_Shirt_Hot_Pink_Casual_Long_qrivrp.jpg", price: "1500" },
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756287488/%D9%85%D8%AD%D8%B5%D9%88%D9%84_%D8%AC%D8%AF%DB%8C%D8%AF_%D9%88%D8%B1%D9%82_%D8%A8%D8%B2%D9%86_%D9%88_%D8%AC%D8%AF%D9%88%D9%84_%D8%B3%D8%A7%DB%8C%D8%B2%D8%A8%D9%86%D8%AF%DB%8C%D8%B4%D9%88_wmljin.jpg", price: "250" },
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756287658/Letter_Printed_Button_Half_Placket_Short_Sleeve_ozqjxf.jpg", price: "600" }
            ],
            kids: [
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756287482/c0d25c64-7084-4c2c-b0c4-2d7616562996_rzmljj.jpg", price: "300" },
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756287479/SHEIN_Baby_Boy_Letter_Graphic_Polo_Shirt_Shorts_rt4d8w.jpg", price: "350" },
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756287477/Reiss_-_Dark_Sage_Textured_Half-Zip_Polo_T-Shirt_k2g1vr.jpg", price: "500" },
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756287493/Effortless_Style_with_All-Day_Comfort__Feel_v8ziwy.jpg", price: "600" },
                { image: "https://res.cloudinary.com/dut9om5xu/image/upload/v1756287983/%EC%97%AC%EB%A6%84_%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8%EC%9B%A8%EC%96%B4_100_%EB%A9%B4_%ED%8B%B0%EC%85%94%EC%B8%A0_%EB%A9%8B%EC%A7%84_%EA%B7%B8%EB%9E%98%ED%94%BC%ED%8B%B0_%ED%94%84%EB%A6%B0%ED%8A%B8_%EC%97%AC%EC%95%84_%ED%8B%B0_%EB%B0%98%ED%8C%94_%EC%96%B4%EB%A6%B0%EC%9D%B4_ipt0nq.jpg", price: "200" }
            ]
        };
    }

    function saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }

    let products = loadProducts();

    function addProducts(sectionId, items) {
        const container = document.querySelector(`#${sectionId} .row`);
        if (!container) return;
        container.innerHTML = "";
        items.forEach(item => {
            container.insertAdjacentHTML("beforeend", `
                <div class="product col-6 col-md-4 col-lg-2 d-flex flex-column card p-2 m-2">
                    <img src="${item.image}" class="card-img-top mb-2" loading="lazy" alt="Product">
                    <h4 class="text-center">${item.price ? item.price + "$" : "غير محدد"}</h4>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary btn-sm add-cart"><i class="bi bi-bag-fill"></i></button>
                        <button class="btn btn-danger btn-sm add-wishlist"><i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            `);
        });
    }

    addProducts("man", products.man);
    addProducts("woman", products.woman);
    addProducts("kids", products.kids);

    const addBtn = document.getElementById("addProductBtn");
    if (addBtn) {
        addBtn.addEventListener("click", function () {
            window.location.href = "add-product.html";
        });
    }

    const form = document.getElementById("productForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const image = document.getElementById("productImage").value;
            const price = document.getElementById("productPrice").value;
            const section = document.getElementById("productSection").value;

            Swal.fire({
                title: 'The product has been added successfully!',
                html: `<b>price:</b> ${price} <br><b>section:</b> ${section} <br>
                        <img src="${image}" alt="Product image" style="max-width:150px;margin-top:10px;">`,
                icon: 'success',
                confirmButtonText: 'Okey'
            });

            const newProduct = { image, price };
            products[section].push(newProduct);
            saveProducts(products);
            addProducts("man", products.man);
            addProducts("woman", products.woman);
            addProducts("kids", products.kids);
            form.reset();
        });
    }

    function addToCart(product) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire({ title: "Added!", text: "Product added to cart", icon: "success", timer: 2000, showConfirmButton: false });
    }
    function addToWishlist(product) {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        Swal.fire({ title: "Added!", text: "Product added to wishlist", icon: "success", timer: 2000, showConfirmButton: false });
    }

    // --- Event delegation ---
    document.body.addEventListener("click", function (e) {
        const card = e.target.closest(".product");
        if (!card) return;

        const product = {
            image: card.querySelector("img").src,
            price: card.querySelector("h4").textContent.replace("$", "")
        };

        if (e.target.closest(".add-cart")) addToCart(product);
        if (e.target.closest(".add-wishlist")) addToWishlist(product);
        
    });
});
