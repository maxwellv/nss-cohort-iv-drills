/* jshint camelcase:false */
(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#get-wind').click(getWind);
  }
  function getWind(){
    var zip = $('#zip').val();
    if (zip === ''){
      alert('Please enter a ZIP Code.');
      return;
    }
    var URL = 'http://api.wunderground.com/api/7c46208d975d14ef/conditions/q/' + zip + '.json?callback=?';
    $.getJSON(URL, receive);
  }
  function receive(data){
    var loc = data.current_observation.display_location.full;
    var desc = data.current_observation.wind_string;
    var dir = data.current_observation.wind_dir;
    var deg = data.current_observation.wind_degrees;
    var speed = data.current_observation.wind_mph;
    var gust = data.current_observation.wind_gust_mph;
    $('#wind').text($('#wind').text() + ' ' + loc);
    $('#desc').text($('#desc').text() + ' ' + desc);
    $('#dir').text($('#dir').text() + ' ' + dir);
    $('#deg').text($('#deg').text() + ' ' + deg);
    $('#speed').text($('#speed').text() + ' ' + speed);
    $('#gust').text($('#gust').text() + ' ' + gust);
  }
})();
