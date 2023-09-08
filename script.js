document.addEventListener('DOMContentLoaded', function () {
    const itemNameInput = document.getElementById('item-name-input');
    const itemPriceInput = document.getElementById('item-price-input');
    const addButton = document.getElementById('add');
    const shoppingList = document.getElementById('shopping-list');
    const totalElement = document.getElementById('total');

    addButton.addEventListener('click', function () {
        const itemName = itemNameInput.value.trim();
        const itemPrice = parseFloat(itemPriceInput.value);

        if (itemName === '' || isNaN(itemPrice) || itemPrice <= 0) {
            alert('Please enter a valid item name and price.');
            return;
        }

        const newRow = document.createElement('tr');
        const itemNameCell = document.createElement('td');
        const itemPriceCell = document.createElement('td');

        itemNameCell.textContent = itemName;
        itemPriceCell.textContent = itemPrice.toFixed(2);

        newRow.appendChild(itemNameCell);
        newRow.appendChild(itemPriceCell);
        shoppingList.appendChild(newRow);

        // Clear input fields
        itemNameInput.value = '';
        itemPriceInput.value = '';

        // Update the grand total
        updateTotal();
    });

    function updateTotal() {
        const rows = shoppingList.querySelectorAll('tr');
        let grandTotal = 0;

        for (let i = 1; i < rows.length; i++) {
            const priceCell = rows[i].querySelector('td:nth-child(2)');
            grandTotal += parseFloat(priceCell.textContent);
        }

        totalElement.textContent = grandTotal.toFixed(2);
    }
});
