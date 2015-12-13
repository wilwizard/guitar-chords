Chordia = Backbone.View.extend({


  render: function(){
    var $fret = $('<div class="fret">');
    var $string = $('<div class="string">');
    var $fretBoard = $('<div class="board">');
    
    for(var i = 0; i < 15; i++ ) {
      $string.append($fret.clone());
    }

    for(var j = 0; j < 6; j++ ) {
      $fretBoard.append($string.clone()); 
    }
      
    this.$el.append($fretBoard);
  }

});