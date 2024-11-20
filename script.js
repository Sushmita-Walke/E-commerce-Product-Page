// script.js

// Product Data
const product = {
    title: "Wireless Bluetooth Headphones",
    description: "Experience high-quality sound with these premium wireless headphones. Perfect for music, calls, and more.",
    price: 199.99,
    image: "https://www.bigw.com.au/medias/sys_master/images/images/h6c/hfb/47605853585438.jpg", // Replace with your actual product image URL
  };
  
  // Populate the page with product data
  document.getElementById("productTitle").textContent = product.title;
  document.getElementById("productDescription").textContent = product.description;
  document.getElementById("productPrice").textContent = `$${product.price}`;
  document.getElementById("productImg").src = product.image;
  
  // Add to Cart Button Functionality
  document.getElementById("addToCartBtn").addEventListener("click", () => {
    document.getElementById("cartMessage").textContent = `${product.title} has been added to your cart!`;
  });
  