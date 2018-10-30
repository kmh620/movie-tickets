

function Ticket(personAge, movieTime) {
  this.personAge = personAge,
  this.movieTime = movieTime,
  this.price = 10
}

Ticket.prototype.findPrice = function() {
  //debugger;
    if ( this.personAge <= 12) {
      this.price -= 5;
      console.log("A discount! " + this.price);
    };
};

//UI Logic
$(document).ready(function(){
  //attachContactListeners();
  $("#movie").submit(function(event){
    event.preventDefault();
    //debugger;
    //getting info from user
    var inputtedMovieTime = parseInt($("input#movie-time").val());
    var inputtedPersonAge = parseInt($("input#age").val());
    //birthing a new object
    var newTicket = new Ticket(inputtedPersonAge, inputtedMovieTime);

    //calling the prototype on the object
    newTicket.findPrice();

    // finalTicket.addTicket(newTicket);
    console.log("The user will see: " + newTicket.price)
    //displayContactDetails(addressBook);
  })
})
