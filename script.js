const productContainer = document.getElementById("products");
const search = document.getElementById("search");
const message = document.getElementById("message");
let allProducts = [];
async function fetchProducts() {
    try{
        const response = await axios.get("https://dummyjson.com/products");
        allProducts = response.data.products;
        displayProducts(allProducts);
    }
    catch(error){
        message.innerHTML = "Failed to Load Products";
    }
}
function displayProducts(products){
    productContainer.innerHTML = "";
    if(products.length===0){
        message.innerHTML = "No Product Found";
        return;
    }
    message.innerHTML = "";
    products.forEach(product=>{
        productContainer.innerHTML += `
        <div class="card">
            <img src="${product.thumbnail}" alt="">
            <div class="card-body">
                <h2>${product.title}</h2>
                <p class="price">$${product.price}</p>
                <p class="rating">⭐ ${product.rating}</p>
                <span class="category">${product.category}</span>
            </div>

        </div>
        `;
    });
}
search.addEventListener("keyup",function(){
    const value = search.value.toLowerCase();
    const filtered = allProducts.filter(product=>
        product.title.toLowerCase().includes(value)
    );
    displayProducts(filtered);
});
fetchProducts();