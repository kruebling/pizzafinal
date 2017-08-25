// back-end logic
function Pizza(size, topping, delivery, quantity) {
  this.size = size;
  this.topping = topping;
  this.delivery = delivery;
  this.quantity = quantity;
}

Pizza.prototype.totalPrice = function() {
  return '$' + ((this.size + this.topping) * this.quantity) + this.delivery;
};

// front-end logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    $("ul#receipt").empty(order);

    var inputtedSize = parseFloat($('#pizzaSize').val());
    var inputtedTopping = parseFloat($('input:checkbox[name=topping]:checked').val());
    var inputtedDelivery = parseFloat($('#delivery').val());
    var inputtedQuantity = parseFloat($('#pizzaQuantity').val());

    var finalSize = $("#pizzaSize option:selected").text();
    var finalTopping = $("input:checkbox[name=topping]:checked").text();
    var finalDelivery = $("#delivery option:selected").text();
    var finalQuantity = $("#pizzaQuantity option:selected").text();

    var order = new Pizza(inputtedSize, inputtedTopping, inputtedDelivery, inputtedQuantity);

    $('ul#receipt').append(finalSize + " " + finalTopping + " " + finalDelivery + " " + finalQuantity + " " + order.totalPrice());
  });
});
