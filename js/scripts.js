//business logic
function FinalTicket() {

  this.tickets = [],
  this.currentId = 0
}

FinalTicket.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets.push(ticket);
}

FinalTicket.prototype.assignId = function () {
  this.currentId +=1;
  return this.currentId;
}

FinalTicket.prototype.findPrice = function(price) {
  debugger
  for (var i=0; i<this.tickets.length; i++) {
    if (this.tickets[0] <= 12 || this.tickets[0] >= 50) {
      $("p#result").text("$5");
    } else if (this.tickets[1] <5) {
        $("p#result").text("$5");
      } else {
        $("p#result").text("$10");
     }
    }
  }

function Ticket(personAge, movieTime) {
  debugger
  this.personAge = personAge,
  this.movieTime = movieTime
  // this.id;
}

var finalTicket = new FinalTicket();
// var discountTicket = ("$5");
// var spendyTicket = ("$10");

// function displayMovieDetails(showTimesToDisplay) {
//   var movieList = $("ul#movies");
//   var htmlForMovieInfo = "";
//   showTimesToDisplay.movies.forEach(function(movie) {
//     htmlForMovieInfo += "<li id=" + ticket.id + ">" + "$10" + "</li>";
//   });
//   contactsList.html(htmlForContactInfo)
// };

$(document).ready(function(){
  //attachContactListeners();
  $("#movie").submit(function(event){
debugger
    event.preventDefault();
    var inputtedMovieTime = parseInt($("input#movie-time").val());
    var inputtedPersonAge = parseInt($("input#age").val());
    $("input#movie-time").val("");
    $("input#age").val("");

    var newTicket = new Ticket(inputtedPersonAge, inputtedMovieTime);
    finalTicket.addTicket(newTicket);
    finalTicket.findPrice(newTicket);
    console.log(newTicket)
    //displayContactDetails(addressBook);
  })
})
