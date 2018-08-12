let count = 1;
const newPrices = ['$19.99',  '$39.98',  '$59.57',  '$79.96'];
const oldPrices = ['$49.99',  '$99.98',  '$149.97',  '$199.96'];
const addBtn = document.getElementById('add');
const deleteBtn = document.getElementById('minus');
const newPrice = document.getElementById('newPrice');
const oldPrice = document.getElementById('oldPrice');
const priceDisplay = document.getElementById('qty');
const shopBtn = document.querySelector('.btn');
const wishBtn = document.getElementById('wishlist');
const price = (val) => {

  if(val == 'add') {
    if(count < 4) {
      count++;
      priceDisplay.textContent = count;
      newPrice.textContent = newPrices[count - 1];
      oldPrice.textContent = oldPrices[count - 1];
      return count;
    }
  } else {
    if(count < 2) {
      alert('At least one item must be selected')
    } else {
      count--;
      priceDisplay.textContent = count;
      newPrice.textContent = newPrices[count - 1];
      oldPrice.textContent = oldPrices[count - 1];
      return count;
    }
  }
};


addBtn.addEventListener('click', () => {
  price("add");
});
deleteBtn.addEventListener('click', () => {
   price("delete");
});
shopBtn.addEventListener('click', () => {
  console.log(count)
  console.log(newPrices[count - 1])
});
wishBtn.addEventListener('click', () => {
  alert('Added to wishlist!');
})
