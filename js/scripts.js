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


function City(name, country, date, visits) {
  this.name = name;
  this.country = country;
  this.date = date;
  this.visits = visits;
}
// var arr = [$('input1').val(), $('input2').val(), $('input3').val(),]
// let place = new Cities('bahamas', 'Bahamas' , '04-3-2020', arr)

// Front End


$(document).ready(function(){
  var randomArray = [{name: 'eric', age:24}, {name:'sean', age: 102}]
  randomArray.forEach(person=>{
    console.log(person.name)
  })
  var whateverFloats = new PlacesIveBeen();
  $('#form-group').submit(function(event){
    event.preventDefault();
    var cityName = $('#cityName').val();
    var countryName = $('#countryName').val();
    var date = $('#date').val();
    var placesVisited = $('placesVisited').val();

    var wholePlace = new City(cityName, countryName, date, placesVisited)
      whateverFloats.addCities(wholePlace)
      
  });
});