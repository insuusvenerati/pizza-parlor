## Tests

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza("medium", ["anchovies", "pineapple"]);
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.prototype.calculatePrice()

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
Expected Output: $13.50

# Pizza Order Website

#### By Sean Norwood

#### A simple website for ordering pizzas with various toppings and sizes.

## Technologies Used

- HTML
- CSS
- JavaScript

## Description

This is a basic setup for a pizza ordering website. The website allows users to order one or more pizzas, each with individual toppings and sizes. The total cost of the order is calculated and displayed on the website.

## Setup/Installation Requirements

- Clone the repository from GitHub
- Open the `index.html` file in your browser
- You should see the form for ordering pizzas
- Select the size and toppings for your pizza
- Click the "Add Pizza" button to add the pizza to your order
- The total cost of your order is displayed on the website
- Repeat the process to add more pizzas to your order
- Click the "Place Order" button to submit your order

## Known Bugs

- No known bugs at this time

## License

If you have any issues or have questions, ideas or concerns, please feel free to contact me or make a contribution to the code.

Copyright (c) 2022 Sean Norwood
