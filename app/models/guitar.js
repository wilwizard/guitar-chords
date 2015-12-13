noteToNumber = {
      'C': 0,
      'C#': 1,
      'Db': 1,
      'D': 2,
      'D#': 3,
      'Eb': 3,
      'E': 4,
      'F': 5,
      'F#': 6,
      'Gb': 6,
      'G': 7,
      'G#': 8,
      'Ab': 8,
      'A': 9,
      'A#': 10,
      'Bb': 10,
      'B': 11
    };

numberToNote = {
      0: 'C',
      1: 'Db',
      2: 'D',
      3: 'Eb',
      4: 'E',
      5: 'F',
      6: 'F#',
      7: 'G',
      8: 'Ab',
      9: 'A',
      10: 'Bb',
      11: 'B'
};


var Guitar = Backbone.Model.extend({

  setUp: function(){
    var tuning = this.get('tuning');
    var frets = this.get('frets');
    var notes = [];
    
    for(var i=0; i < tuning.length; i++){
      notes[i] = noteToNumber[tuning[i]] + frets[i]
    };

    this.set({notes: notes});
  },

  

  
});