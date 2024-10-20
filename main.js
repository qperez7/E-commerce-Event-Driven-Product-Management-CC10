// Task 1 : Setup Product HTML Structure (Refer to html file)
// Task 2 : Add Event Listeners for Product Selection
const priceElement = document.getElementById("product-price");
const sizeSelector = document.getElementById("size-selector");
sizeSelector.addEventListener("change", (event) => {
const selectedPrice = event.target.value;
priceElement.textContent = `$${selectedPrice}`;
});
// Task 3: Handle Stock Availability
const stock = {
    small: 4,
    medium: 4,
    large: 2,
};
const purchaseButton = document.getElementById("Purchase");
function updateInventory(stock) {
if (stock > 0) {
purchaseButton.disabled = true;
return `In Stock: ${stock[size] - 1}`
} else {
purchaseButton.disabled = false;
return 'Out of Stock'
}
}
purchaseButton.addEventListener("click", () => {
stock--;
updateInventory();
});
updateInventory();
// Task 4: Create a Checkout Event
document.getElementById('size-selector').addEventListener('Purchase',
    function(event){
        if(event.preventDefault()) {
        alert('Item is out of stock');
        }
    else {
        alert ('Your purchase has been confirmed')
    }
    });
// Task 5: Implement Event Delegation for Dynamic Product List
const itemList = document.getElementById('itemList');
itemList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
    alert(`You clicked ${event.target.textContent}`);
    }
    });
const newItem = document.createElement('li');
itemList.appendChild(newItem)