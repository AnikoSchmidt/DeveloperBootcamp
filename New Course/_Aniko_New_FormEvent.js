const listContainer =  document.querySelector("#list");
const listForm = document.querySelector("form");
listForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const myProduct = listForm.elements.product.value;
    const myQty = listForm.elements.qty.value;
    addItem(myProduct, myQty);
});


const addItem = (myProduct, myQty) => {
    const newItem = document.createElement('li');
    newItem.append(`${myQty}`);
    newItem.append(` ${myProduct}`);
    listContainer.append(newItem);
};