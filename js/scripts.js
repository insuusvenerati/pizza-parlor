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
  /**
   * @type {Pizza[]}
   */
  this.pizzas = [];
}

/**
 *
 * @param {Pizza} pizza
 */
Order.prototype.addPizza = function (pizza) {
  this.pizzas.push(pizza);
};

Order.prototype.calculateTotalPrice = function () {
  let totalPrice = 0;
  for (let i = 0; i < this.pizzas.length; i++) {
    totalPrice += this.pizzas[i].calculatePrice();
  }
  return `$${totalPrice.toPrecision(3)}`;
};

window.addEventListener("load", function () {
  const order = new Order();

  document.getElementById("addPizza").addEventListener("click", function () {
    const size = document.querySelector('input[name="size"]:checked').value;
    const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(
      (topping) => topping.value
    );
    const pizza = new Pizza(size, toppings);
    order.addPizza(pizza);
    document.getElementById("totalCost").textContent = order.calculateTotalPrice();
  });

  document.getElementById("pizzaOrderForm").addEventListener("submit", function (event) {
    event.preventDefault();
  });
});
