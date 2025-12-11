const cart = [
    { customerName: "Alex" },
    { totalPrice: 0 },
    { itemCount: 0 }
];
cart.items = ['apples', 'bananas', 'cherries'];
cart.totalPrice = 99.99;
cart.itemCount = 3;
delete cart.customerName;
console.log(cart);


