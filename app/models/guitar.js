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


var Guitar = function(options){
  this.tuningNotes = ko.observableArray(options.tuning);
  this.tuningInts = _.map(this.tuningNotes(), function(note){
    return noteToNumber[note];
  });
  this.tabs = options.tabs;
  this.fretNotes = [];
  this.fretInts = []
  for(var i=0; i < this.tuningInts.length; i++){
    var tab = this.tabs ? this.tabs[i] : 0;
    var noteNum = (this.tuningInts[i] + tab)%12;
    this.fretInts.push(noteNum);
    this.fretNotes.push(numberToNote[noteNum]);
  }
};

Guitar.prototype.changeNote = function(string, fret){
  this.fretInts[string] = (fret + this.tuningInts[string])%12;
  this.fretNotes[string] = numberToNote[this.fretInts[string]];
};

Guitar.prototype.currentChords = function(string, fret){

}