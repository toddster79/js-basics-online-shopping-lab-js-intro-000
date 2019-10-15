var cart = [];

var itemPrice = Math.floor(Math.random() * 100) + 1;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  itemPrice = Math.floor(Math.random() * 100) + 1;
  var name = {
    itemName: itemName,
    itemPrice: itemPrice
  }
  cart.push(name);
  return `${name.itemName} has been added to your cart.`;
}
  
 function viewCart() {
  for (var i = 0; i <= cart.length; i++) {
    if ( cart.length === 0 ) {
      return 'Your shopping cart is empty.';
  } else if ( cart.length === 1 ) {
      return `In your cart, you have ${cart[i].itemName} ` + `at $${cart[i].itemPrice}.`;
  } else if ( cart.length === 2 ) {
      return `In your cart, you have ${cart[i].itemName} ` + `at $${cart[i].itemPrice},` + ` and ${cart[1].itemName} ` + `at $${cart[1].itemPrice}.`; 
  } else {
      return `In your cart, you have ${cart[i].itemName} ` + `at $${cart[i].itemPrice},` + ` ${cart[1].itemName} ` + `at $${cart[1].itemPrice},` + ` and ${cart[2].itemName} ` + `at $${cart[2].itemPrice}.`; 
  }
  }
}

function total() {
  var totalCost = 0;
  for (var i in cart) {
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  // write your code here
}
