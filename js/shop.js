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

// Exercise 1
function buy(id) {
  // --------------------------------------------------------------------------
  // A. Instructions
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array
  // --------------------------------------------------------------------------

  // ## SOLUTION

  let qty = 0; // varable cantidad para contabilizar el producto

  for (const product of products) {
    if (product.id === id) {
      // Verifica si el producto ya está en el carrito por id
      const existingProduct = cart.find((cartProduct) => cartProduct.id === id);

      if (existingProduct) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        existingProduct.qty++;
      } else {
        // Si el producto no está en el carrito, agrégalo con cantidad 1
        cart.push({ ...product, qty: 1 }); // creamos una copia de product pero le añadimos la propiedadqty
      }
      // Utiliza el precio con descuento si existe, de lo contrario, usa el precio original
      const priceToDisplay = existingProduct?.subtotalWithDiscount || product.price;

      console.log(
        `Product with id ${id} added to the cart. Price: ${priceToDisplay.toFixed(2)}. Qty: ${
          existingProduct ? existingProduct.qty : 1
        }.`
      );

      // Actualizar el contador del producto
      const qtyElement = document.getElementById(`product_qty_${id}`);
      if (qtyElement) {
        qtyElement.textContent = existingProduct ? existingProduct.qty.toString() : '1';
      }

      calculateTotal();
      applyPromotionsCart(cart);

      updateCartCount(); // Añadir esta línea para actualizar el contador visualmente
      return;
    }
  }
  // Si el bucle se completa y no se encuentra el producto
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
  // Obtén el contenedor del carrito
  const cartList = document.querySelector('#cart_list');

  // Limpia el contenido actual del carrito en el modal
  cartList.innerHTML = '';

  // Vacía el array cart
  cart = [];

  console.log('The cart is empty');

  // Actualiza el contador del carrito a 0
  updateCartCount(0);

  // Actualiza el elemento HTML del "Total Price" a 0
  const totalPriceElement = document.querySelector('#total_price');
  totalPriceElement.textContent = '0.00';

  // Calcular el total después de vaciar el carrito
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
    // Utiliza el campo subtotalWithDiscount si existe, de lo contrario, usa el precio original multiplicado por la cantidad
    const priceWithDiscount = cart[i].subtotalWithDiscount || cart[i].price;
    totalPrice += priceWithDiscount * cart[i].qty;
  }

  // Redondea el resultado a dos decimales
  totalPrice = Math.round(totalPrice * 100) / 100;

  // Utiliza toFixed para limitar a dos decimales (mejor redondear para evitar problemas).
  // totalPrice = totalPrice.toFixed(2);

  // Imprime el resultado después de completar el bucle
  console.log('Total Price:', totalPrice);

  // Devuelve el totalPrice si deseas utilizar este valor en otra parte de tu código
  return totalPrice;
}

// Exercise 4
function applyPromotionsCart(cart) {
  // Recorre cada producto en el carrito
  for (const product of cart) {
    // Aplica la promoción si se cumplen las condiciones
    if (product.id === 1 && product.qty >= 3) {
      const discount = product.price * 0.2; // Calcula el descuento
      product.subtotalWithDiscount = product.price - discount; // Resta el descuento al precio original
      console.log(
        `Promotion applied to product ${product.id}: 20% discount. New price: ${product.subtotalWithDiscount}`
      );
    } else if (product.id === 3 && product.qty >= 10) {
      const discount = product.price * 0.3; // Calcula el descuento
      product.subtotalWithDiscount = product.price - discount; // Resta el descuento al precio original
      console.log(
        `Promotion applied to product ${product.id}: 30% discount. New price: ${product.subtotalWithDiscount}`
      );
    } else {
      // Si no hay descuento, simplemente establece el subtotalWithDiscount al precio original
      product.subtotalWithDiscount = product.price;
    }
  }
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom

  // Get the cart modal and cart list tbody
  const cartModal = document.querySelector('#cartModal');
  const cartList = document.querySelector('#cart_list');

  // Clear the existing content in the cart list
  cartList.innerHTML = '';

  // Iterate through the items in the cart
  for (const item of cart) {
    // Create a new table row
    const row = document.createElement('tr');

    // Fill the row with item details
    row.innerHTML = `
   <th scope="row">${item.name}</th>
   <td>$${item.price.toFixed(2)}</td>
   <td>
     <span id="product_qty_${item.id}">${item.qty}</span>
   </td>
   <td>$${(item.subtotalWithDiscount * item.qty).toFixed(2)}</td>
 `;

    // Append the row to the cart list
    cartList.appendChild(row);
  }

  // Update the total price in the modal
  const totalPriceElement = document.querySelector('#total_price');
  totalPriceElement.textContent = calculateTotal().toFixed(2);
}

// Exercise EXTRA => actualizamos el icono del carrito
function updateCartCount() {
  // Obtén el elemento del conteo del carrito
  const countElement = document.getElementById('count_product');

  // Calcula la cantidad total sumando la cantidad de cada producto en el carrito
  const qtyTotal = cart.reduce((total, item) => total + item.qty, 0);

  // Actualiza el contenido del elemento del conteo
  countElement.textContent = qtyTotal.toString();
}

// ** Nivell II **

// Exercise 7
function decrementQty(id) {
  const qtyElement = document.getElementById(`product_qty_${id}`);
  const currentQty = parseInt(qtyElement.textContent);

  if (currentQty > 0) {
    qtyElement.textContent = currentQty - 1;
    removeFromCart(id);
    updateCartCount();
  }
  console.log(`Decrementing quantity for product ${id}`);
}

function incrementQty(id) {
  const qtyElement = document.getElementById(`product_qty_${id}`);
  const currentQty = parseInt(qtyElement.textContent);

  qtyElement.textContent = currentQty + 1;
  buy(id, currentQty + 1); // Asegúrate de pasar el valor actualizado de qty a la función buy
  console.log(`Incrementing quantity for product ${id}`);
}

function removeFromCart(id) {
  const productIndex = cart.findIndex((product) => product.id === id);

  if (productIndex !== -1) {
    const currentQty = cart[productIndex].qty;

    if (currentQty > 1) {
      // Decrementar la cantidad en una unidad
      cart[productIndex].qty = currentQty - 1;
    } else {
      // Eliminar el producto del carrito
      cart.splice(productIndex, 1);
    }

    // Actualizar las promociones
    applyPromotionsCart(cart);
    // Actualizar el total
    calculateTotal();
    // Actualizar el carrito visualmente (puedes llamar a printCart si es necesario)
  }
}

function open_modal() {
  printCart();
}
