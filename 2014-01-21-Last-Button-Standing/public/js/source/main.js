(function(){
  'use strict';
  $(document).ready(initialize);

  function initialize(){
    $('#click-me').click(addButtons);
  }

  function addButtons(){
    var button1 = $('<input type=\'button\' id=\'button1\' value=\'Button 1\'>');
    var button2 = $('<input type=\'button\' id=\'button2\' value=\'Button 2\'>');
    $('#newbuttons').append(button1, button2);
    $('#button1').click(hideClickMe);
    $('#button2').click(hideButton1);
    //Declaring these click events here isn't necessary. You can declare them in
    //initialize() using the .on method. Example:
    //$('#newbuttons').on('click', 'button1', dynamicClick);
  }
  function hideClickMe(){
    $('#click-me').hide();
  }
  function hideButton1(){
    $('#button1').hide();
  }
/* Separate functions weren't necessary, either. To use the dynamicClick example:
 * function dynamicClick(){
 *    switch (this.id){   //"this" is the button that got clicked
 *      case 'button1':
 *        $('#click-me').hide();
 *        break;
 *      case 'button2':
 *        $('#button1').hide();
 *        break;
 *    }
 *  }
 */


})();
