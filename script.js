document.addEventListener('DOMContentLoaded', function () {
    const itemNameInput = document.getElementById('item-name-input');
    const itemPriceInput = document.getElementById('item-price-input');
    const itemQtyInput = document.getElementById('item-qty-input'); // Added quantity input
    const addButton = document.getElementById('add');
    const shoppingList = document.getElementById('shopping-list');
    const totalDisplay = document.getElementById('total');

    addButton.addEventListener('click', function () {
        const itemName = itemNameInput.value.trim();
        const itemPrice = parseFloat(itemPriceInput.value);
        const itemQty = parseInt(itemQtyInput.value); // Parse quantity as an integer

        if (itemName === '' || isNaN(itemPrice) || itemPrice <= 0 || isNaN(itemQty) || itemQty <= 0) {
            alert('Please enter a valid item name, price, and quantity.');
            return;
        }

        // Create a new row in the shopping list table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${itemName}</td>
            <td>${itemQty}</td>
            <td>$${(itemPrice * itemQty).toFixed(2)}</td>
        `;
        shoppingList.appendChild(newRow);

        // Clear input fields
        itemNameInput.value = '';
        itemPriceInput.value = '';
        itemQtyInput.value = '';

        // Calculate and update the total
        const currentTotal = parseFloat(totalDisplay.textContent.match(/\d+(\.\d+)?/)[0]);
        const newTotal = currentTotal + itemPrice * itemQty;
        totalDisplay.textContent = `Grand Total: $${newTotal.toFixed(2)}`;
    });
});
