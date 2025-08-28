if (!window.location.pathname.includes("index.html") && localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}



document.getElementById("main-nav").innerHTML = `
<nav class="navbar fixed-top navbar-expand-lg shadow rounded">
        <div class="container">
            <a class="navbar-brand brand fst-italic fs-3 text-capitalize" href="#">
                    <img src="favicon-96x96.png"  alt="Logo">Cartna</a>

            <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav">
                <span><i class="fa-solid fa-bars-progress fa-2xl" style="color: #081f5c;"></i></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto ">
                    <li class="nav-item"><a class="nav-link" href="home.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="product.html">Products</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="add-product.html">Add Product</a></li>

                </ul>

                <ul class="navbar-nav fs-3 d-flex align-items-center">
                    <li class="nav-item">
                        <a class="nav-link" href="cart.html">
                            <i class="fas fa-shopping-bag"></i>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" id="logoutBtn" href="index.html">
                            <i class="fa-solid fa-right-from-bracket fa-sm" style="color: #081f5c;"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedIn");
        window.location.href = "login.html";
    });
}

document.getElementById("main-footer").innerHTML = `
<footer class="bg-dark text-light py-5 mt-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <h5 class="fw-bold mb-3">About Cartna</h5>
                    <p class="small">
                        Cartna is your go-to online shopping destination.
                        We provide top-quality products, fast delivery, and reliable service.
                        Our mission is to make your shopping experience simple, secure, and enjoyable.
                    </p>
                    <div>

                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                    <h5 class="fw-bold mb-3">Quick Links</h5>
                    <ul class="list-unstyled small">
                        <li><a href="home.html" class="text-light text-decoration-none">Home</a></li>
                        <li><a href="product.html" class="text-light text-decoration-none">Shop</a></li>
                        <li><a href="about.html" class="text-light text-decoration-none">About</a></li>
                        <li><a href="home.html#contact" class="text-light text-decoration-none">Contact</a></li>
                    </ul>
                </div>

                <div class="col-lg-4 col-md-12">
                    <h5 class="fw-bold mb-3">Contact Us</h5>
                    <p class="small mb-1"><i class="bi bi-geo-alt"></i> 123 Marketing Avenue, New York, NY 10001</p>
                    <p class="small mb-1"><i class="bi bi-telephone"></i> (+20) 01278877398</p>
                    <p class="small"><i class="bi bi-envelope"></i> info@cartna.com</p>
                </div>
            </div>

            <hr class="border-light" />
            <p class="text-center small mb-0">&copy; 2025 Cartna. All rights reserved.</p>
        </div>
    </footer>`




document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "https://res.cloudinary.com/dut9om5xu/image/upload/v1756284069/stylish-man-wearing-hat-standing-wardrobe_vva5hn.jpg",
        "https://res.cloudinary.com/dut9om5xu/image/upload/v1756283938/interior-kids-room-decoration-with-clothes_z6jqly.jpg",
        "https://res.cloudinary.com/dut9om5xu/image/upload/v1756284047/full-length-portrait-cute-little-girl-hat_ewywfo.jpg",
        "https://res.cloudinary.com/dut9om5xu/image/upload/v1756284073/small-purse-studio-still-life_iwvn4g.jpg",
        "https://res.cloudinary.com/dut9om5xu/image/upload/v1756283909/10266141_qijcen.jpg",
        "https://res.cloudinary.com/dut9om5xu/image/upload/v1756283633/cld-sample-5.jpg",
        "https://res.cloudinary.com/dut9om5xu/image/upload/v1756283624/samples/ecommerce/leather-bag-gray.jpg",
        "https://res.cloudinary.com/dut9om5xu/image/upload/v1756283624/samples/ecommerce/accessories-bag.jpg"
    ];

    const swiperWrapper = document.querySelector(".cardsSwiper .swiper-wrapper");

    images.forEach(src => {
        swiperWrapper.innerHTML += `
        <div class="swiper-slide">
            <div class="gallery-card card">
                <img src="${src}" class="card-img-top" loading="lazy" alt="">
            </div>
        </div>`;
    });

    var swiper = new Swiper(".cardsSwiper", {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 6 }
        },
    });
});

//-----------contact----------------//

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let fname = document.getElementById("fname").value.trim();
    let email = document.getElementById("email").value.trim();

    if (fname === "" || email === "") {
        Swal.fire({
            title: "Oops!",
            text: "Please fill all inputs",
            icon: "error",
            timer: 2000,
            showConfirmButton: false
        });
    } else {
        Swal.fire({
            title: "Thanks!",
            text: "We will reply to you as soon as possible.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false
        });
        this.reset();
    }
});

