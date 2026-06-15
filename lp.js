const offerBtn = document.getElementById("offerBtn");
const popup = document.getElementById("popup");

offerBtn.addEventListener("click", () => {
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
});
const buyButtons = document.querySelectorAll(".product-card button");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});
const products = [
    "bp-removebg-preview.png",
    "1-removebg-preview.png",
    "mir-removebg-preview.png"
];

let current = 0;

const productImage = document.querySelector(".center-product img");

document.querySelector(".right").onclick = () => {
    current = (current + 1) % products.length;
    productImage.src = products[current];
};

document.querySelector(".left").onclick = () => {
    current = (current - 1 + products.length) % products.length;
    productImage.src = products[current];
};