// back-end logic
function Pizza(size, delivery, quantity) {
  this.size = size;
  this.delivery = delivery;
  this.quantity = quantity;
}

Pizza.prototype.totalPrice = function() {
  return (((this.size + topping) * this.quantity) + this.delivery);
};

var topping = 0;

var order = new Pizza ();

// front-end logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    $('input:checkbox[name=topping]:checked').each(function() {
     topping += 1;
   });

    order.size = parseInt($('#pizzaSize').val());
    order.delivery = parseInt($('#pizzaDelivery').val());
    order.quantity = parseInt($('#pizzaQuantity').val());

    var finalSize = $("#pizzaSize option:selected").text();
    var finalDelivery = $("#pizzaDelivery option:selected").text();
    var finalQuantity = $("#pizzaQuantity option:selected").text();
    var finalPrice = order.totalPrice();

    $('li#size').text("Selected Size: " + finalSize);
    $('li#topping').text("Amount of Added Toppings: " + topping);
    $('li#delivery').text("Delivery or Carry Out: " + finalDelivery);
    $('li#quantity').text("Amount of Pizzas: " + finalQuantity);
    $('li#total').text("Price of order: $" + finalPrice);

    $("ul#receipt").show(800);

  });
});
