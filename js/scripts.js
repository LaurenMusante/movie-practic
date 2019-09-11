//backend

class Ticket  {
  constructor (movie, age, name) {
  this.movie = movie;
  this.age = age;
  this.name = name;
  this.price = this.moviePrice();
}

  moviePrice() {
    if (this.movie === "Meow") {
      return "15";
    } else if (this.movie === "Meow2") {
      return "41";
    } else if (this.movie === "Meow3") {
      return "942";
    } else {
      return "90";
    }

  }
}


//UI
$(document).ready(function(){
    $(".movieOptions").submit(function(event) {
    event.preventDefault();
    var meow = $("#type").val();
    var name = $("#name").val();
    var age = parseInt($("#age").val());

    var myTicket = new Ticket (meow, age, name);

    $(".yourPrice").text(myTicket.moviePrice());
  });
});
