// back-end logic
function Pizza(size, topping, delivery, quantity) {
  this.size = size;
  this.topping = topping;
  this.delivery = delivery;
  this.quantity = quantity;
}

Pizza.prototype.totalPrice = function() {
  return '$' + (((this.size + this.topping) * this.quantity) + this.delivery);
};

var order = new Pizza ();

// front-end logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    $("ul#receipt").empty(order);

    this.size = parseInt($('#pizzaSize').val());
    this.topping = parseInt($('input[name="topping"]:checked').val());
    this.delivery = parseInt($('#pizzaDelivery').val());
    this.quantity = parseInt($('#pizzaQuantity').val());

    var finalSize = $("#pizzaSize option:selected").text();
    var finalTopping = $('input[name="topping"]:checked').text();
    var finalDelivery = $("#pizzaDelivery option:selected").text();
    var finalQuantity = $("#pizzaQuantity option:selected").text();

    // var order = new Pizza(inputtedSize, inputtedTopping, inputtedDelivery, inputtedQuantity);

    $('ul#receipt').append(finalSize + " " + finalTopping + " " + finalDelivery + " " + finalQuantity + " " + order.totalPrice());
  });
});
