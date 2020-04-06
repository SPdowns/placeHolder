// Back End
//declaring a constructor with 2 keyvalue pair
function PlacesIveBeen() {
  this.places = [];
  this.currentId = 0;
}
//addplaces is a protoype of the constructor PlacesIveBeen, and its a 
//method of the object created with PlacesIveBeen
PlacesIveBeen.prototype.addplaces = function(city) {
  city.id = this.addID();
  this.places.push(city);
}
PlacesIveBeen.prototype.addID= function(){
  this.currentId += 1;
  return this.currentId;
}
//declaring a constructor with 4 keypair values
function City(name, country, date, visits) {
  this.name = name;
  this.country = country;
  this.date = date;
  this.visits = visits;
}
// var arr = [$('input1').val(), $('input2').val(), $('input3').val(),]
// let place = new places('bahamas', 'Bahamas' , '04-3-2020', arr)

// Front End

//declares jQuerey(UI Logic)
$(document).ready(function(){
  //creating an object using our constructor PLacesIveBeen
  var whateverFloats = new PlacesIveBeen();
//uses jQuerey to collect the inputs on our HTML #form
  $('#form-group').submit(function(event){
    event.preventDefault();
    var cityName = $('#cityName').val();
    var countryName = $('#countryName').val();
    var date = $('#date').val();
    var placesVisited = $('#placesVisited').val();
    
//creating an object using our constructor City
    var wholePlace = new City(cityName, countryName, date, placesVisited)
//taking our object whateverFloats and using the method addplaces to add wholePlace 
//into the places array on line 4
    whateverFloats.addplaces(wholePlace)
//creates the array placesArr that has the object whateverFloats with the data inside
    var placesArr = whateverFloats.places;
//before running the next forLoop, we need to clear whats visible with the .empty functions
//targeting the #returnValue div in the html
    $('#returnAnswer').empty();  
//forEach loop runs through placesArr 
    placesArr.forEach(function(city){
     $('#returnAnswer').append(`<div>
     <h2 id="${city.id}">${city.name}</h2>
     <div id="city${city.id}info" class="no-show">
     <h3>${city.country}</h3>
     <h3>${city.date}</h3>
     <h3>${city.visits}</h3>
     </div>
     </div>`); 
    })
   
 
  });

   //attach event listener .on(event, target which is the h2, and action which in this case is showing a css class) for showing data tracks any click on a h2 that is inside <div id="returnAnswer">
  $('#returnAnswer').on("click", 'h2', function(event){
    //toggle no-show class on div that shrares number in its ID with h2 ID
    $(`#city${event.target.id}info`).toggle('no-show')

  })
});