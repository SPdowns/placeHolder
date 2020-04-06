// Back End
function PlacesIveBeen() {
  this.cities = [];
  this.currentId = 0
}

PlacesIveBeen.prototype.addCities = function(city) {
  this.currentId ++
  this.cities.id = this.currentId
  this.cities.push(city);
}


function Cities(name, country, date, visits) {
  this.name = name;
  this.country = country;
  this.date = date;
  this.visits = visits;
}
// var arr = [$('input1').val(), $('input2').val(), $('input3').val(),]
// let place = new Cities('bahamas', 'Bahamas' , '04-3-2020', arr)