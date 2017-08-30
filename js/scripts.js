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

    $('li#size').append(finalSize);
    $('li#topping').append(topping);
    $('li#delivery').append(finalDelivery);
    $('li#quantity').append(finalQuantity);
    $('li#total').append(finalPrice);

    $("ul#receipt").show(800);
  });
});
