// back-end logic
function Pizza(size, topping, delivery, quantity) {
  this.size = size;
  this.topping = topping;
  this.delivery = delivery;
  this.quantity = quantity;
}

Ticket.prototype.totalPrice = function() {
  return '$' + ((this.size + this.topping) * this.quantity) + this.delivery;
};

// front-end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#receipt").empty(newTicket);

    var inputtedMovie = parseFloat($('#movieName').val());
    var inputtedTime = parseFloat($('#movieTime').val());
    var inputtedAge = parseFloat($('#movieAdmission').val());
    var inputtedQuantity = parseFloat($('#movieQuantity').val());

    var finalMovie = $("#movieName option:selected").text();
    var finalTime = $("#movieTime option:selected").text();
    var finalAge = $("#movieAdmission option:selected").text();
    var finalQuantity = $("#movieQuantity option:selected").text();

    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge, inputtedQuantity);

    $('ul#receipt').append(finalMovie + " " + finalTime + " " + finalAge + " " + finalQuantity + " " + newTicket.totalPrice());
  });
});
