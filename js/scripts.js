/**
 *
 * @param {string} size
 * @param {string[]} toppings
 */
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calculatePrice = function () {
  let basePrice = 0;

  if (this.size === "small") {
    basePrice = 5;
  } else if (this.size === "medium") {
    basePrice = 7;
  } else {
    basePrice = 9;
  }

  const toppingsPrice = this.toppings.length * 0.5;
  return basePrice + toppingsPrice;
};

function Order() {
  this.pizzas = [];
}

Order.prototype.addPizza = function (pizza) {
  this.pizzas.push(pizza);
};
