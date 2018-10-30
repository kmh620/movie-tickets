function Ticket(personAge, movieTime) {
  this.personAge = personAge,
  this.movieTime = movieTime,
  this.price = 10
}
Ticket.prototype.findPrice = function() {
    if (( this.personAge <= 12) || (this.personAge >=50)) {
      this.price -= 5;
    } else if (this.movieTime <5){
      this.price -=5;
      result.push(findPrice())
    }
};
//UI Logic
$(document).ready(function(){
  $("#movie").submit(function(event){
    event.preventDefault();
    var inputtedMovieTime = parseInt($("input#movie-time").val());
    var inputtedPersonAge = parseInt($("input#age").val());
    var newTicket = new Ticket(inputtedPersonAge, inputtedMovieTime);
    newTicket.findPrice();
    $("#result").text("$" + newTicket.price);
  })
})
