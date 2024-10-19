// Task 1 : Setup Product HTML Structure (Refer to html file)
// Task 2 : Add Event Listeners for Product Selection
const priceElement = document.getElementById("product-price");
const sizeSelector = document.getElementById("size-selector");
sizeSelector.addEventListener("change", (event) => {
const selectedPrice = event.target.value;
priceElement.textContent = `$${selectedPrice}`;
});
// Task 3: Handle Stock Availability
let stock = 10;
const inventoryCount = document.getElementById("inventory-count");
const purchaseButton = document.getElementById("Purchase");
function updateInventory() {
if (stock > 0) {
purchaseButton.disabled = false;
inventoryCount.textContent = `In Stock: ${stock}`;
} else {
purchaseButton.disabled = true;
inventoryCount.textContent = "Out of Stock";
}
}
purchaseButton.addEventListener("click", () => {
stock--;
updateInventory();
});
updateInventory();