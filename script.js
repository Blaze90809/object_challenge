var locations = []; // this array will hold your objects


// object constructor
var data = function(state, revenue, location) {
this.state = state;
this.revenue = revenue;
this.locationCount = location;
this.averageRevenue = function(){
  return Math.round(this.revenue / this.locationCount);
};
};
// ["IL", 5000, 12]
// ["MN", 300, 3]
// ["NV", 25000, 1]
// object instances
var Illinois = new data("IL", 5000, 12);
var Minnesota = new data("MN", 300, 3);
var Nevada = new data("NV", 25000, 1);
// push object instances to locations array
locations.push(Illinois, Minnesota, Nevada);

console.log(locations);
// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
