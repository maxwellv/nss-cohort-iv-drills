/* jshint camelcase:false */
(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add-zip').click(addZIP);
  }
  function addZIP(){
    var zip = $('#zip').val();
    if (zip === ''){
      alert('Please enter a ZIP Code.');
      return;
    }
    var url = 'http://api.wunderground.com/api/7c46208d975d14ef/satellite/q/' + zip + '.json?callback=?';
    $.getJSON(url, displayImages);
  }
  function displayImages(data){
    var newImg;
    var newImgName;
    for (var x = 0; x < 3;x++){
      switch (x){
        case 0:
          newImg = $('<img>');
          newImgName = data.satellite.image_url;
          newImg.attr('src', newImgName);
          $('#images').append(newImg);
          break;
        case 1:
          newImg = $('<img>');
          newImgName = data.satellite.image_url_ir4;
          newImg.attr('src', newImgName);
          $('#images').append(newImg);
          break;
        case 2:
          newImg = $('<img>');
          newImgName = data.satellite.image_url_vis;
          newImg.attr('src', newImgName);
          $('#images').append(newImg);
          break;
      }
    }
  }
})();

