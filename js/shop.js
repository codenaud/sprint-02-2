// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: 'cooking oil',
    price: 10.5,
    type: 'grocery',
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: 'Pasta',
    price: 6.25,
    type: 'grocery',
  },
  {
    id: 3,
    name: 'Instant cupcake mixture',
    price: 5,
    type: 'grocery',
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: 'All-in-one',
    price: 260,
    type: 'beauty',
  },
  {
    id: 5,
    name: 'Zero Make-up Kit',
    price: 20.5,
    type: 'beauty',
  },
  {
    id: 6,
    name: 'Lip Tints',
    price: 12.75,
    type: 'beauty',
  },
  {
    id: 7,
    name: 'Lawn Dress',
    price: 15,
    type: 'clothes',
  },
  {
    id: 8,
    name: 'Lawn-Chiffon Combo',
    price: 19.99,
    type: 'clothes',
  },
  {
    id: 9,
    name: 'Toddler Frock',
    price: 9.99,
    type: 'clothes',
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

console.log('Ejercicio 1');

// Exercise 1
function buy(id) {
  // --------------------------------------------------------------------------
  // A. Instructions
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array
  // --------------------------------------------------------------------------

  // ## SOLUTION
  // 1. Loop FOR OF en la ARRAY de productos para agregar el artículo al carrito
  for (const product of products) {
    // 2. Comprueba si el producto actual tiene el mismo ID
    if (product.id === id) {
      // 3. Agrega el producto encontrado al carrito
      cart.push(product);
      console.log(`Product with id ${id} added to the cart. Price: ${product.price}`); // mostramos el precio también
      calculateTotal(); // vamos iterando el importe total
      return; // Sal del bucle una vez que se encuentre y agregue el producto.
    }
  }
  // 4. Si el bucle se completa y no se encuentra el producto
  console.log(`Product with id ${id} not found.`);
}

console.log(cart);

// Exercise 2
function cleanCart() {
  // --------------------------------------------------------------------------
  // A. Instructions
  // 1. Clear the array cart
  // --------------------------------------------------------------------------

  // ## SOLUTION
  // igualamos el array cart a un array vacio.
  cart = [];
  console.log("the cart it's empty");
  calculateTotal();
}

// Exercise 3
function calculateTotal() {
  // --------------------------------------------------------------------------
  // A. Instructions
  // 1. Calculate total price of the cart using the "cartList" array
  // --------------------------------------------------------------------------

  // ## SOLUTION

  // creamos la varibale totalPrice a 0.
  let totalPrice = 0;

  // Loop para poder iterar todos los precios de la cart list y sumarlos
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price; // vamos sumando los precios
  }
  // Imprime el resultado después de completar el bucle
  console.log('Total Price:', totalPrice);

  // Devuelve el totalPrice si deseas utilizar este valor en otra parte de tu código
  return totalPrice;
}

// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
  printCart();
}
