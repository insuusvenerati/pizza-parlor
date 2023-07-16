## Tests

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza("medium", ["anchovies", "pineapple"]);
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.prototype.calculateCost()

Test: "It should calculate the cost of the pizza based on size and toppings"
Code: const myPizza = new Pizza("medium", ["anchovies", "pineapple"]);
Expected Output: 8

Describe: Order()

Test: "It should return an Order object with a property for pizzas"
Code: const myOrder = new Order();
Expected Output: Order { pizzas: [] }

Describe: Order.prototype.addPizza()

Test: "It should add a pizza to the pizzas property of an Order"
Code: const myOrder = new Order();
myOrder.addPizza(new Pizza("medium", ["anchovies", "pineapple"]));
Expected Output: Order { pizzas: [Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }] }

Describe: Order.prototype.calculateTotalPrice()

Test: "It should calculate the total cost of an order"
Code: const myOrder = new Order();
myOrder.addPizza(new Pizza("medium", ["anchovies", "pineapple"]));
myOrder.addPizza(new Pizza("small", ["pepperoni"]));
Expected Output: 13
