/* 
Step-1: get input and add to list
Step-2: display list
step-3: get data from local storage
step-4: set data to local storage
step-5: display data from local storage

*/

const addProduct = () =>{
    const productElement = document.getElementById('product-name');
    const product = productElement.value;
    const quantityElement = document.getElementById('product-quantity');
    const quantity = quantityElement.value;
    productElement.value = "";
    quantityElement.value = "";

    displayProduct(product, quantity);
    addToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) =>{
    const liContainer = document.getElementById('li-container');
    liContainer.innerHTML +=`
        <li>${product} : ${quantity}
    `
}

const getStoredDataFromLocalStorage = () =>{
    let  cart = {};
    const storedCart = localStorage.getItem("cart");
    if(storedCart){
        const cartConverted = JSON.parse(storedCart);
        cart = cartConverted;
    }
    return cart;
}

const addToLocalStorage = (product, quantity) =>{
    const cart = getStoredDataFromLocalStorage();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
}

const displayCartFromLocalStorage = () =>{
    const storedData = getStoredDataFromLocalStorage();
    for(const product in storedData){
        const quantity = storedData[product];
        displayProduct(product, quantity)
    }
}

displayCartFromLocalStorage();