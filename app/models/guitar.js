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

  function addTabs(string, tab){
    return (string + tab)%12;
  }

  this.strings = ko.observableArray(_.map(options.strings, function(str){
    var stringNum = noteToNumber[str.string]
    var noteNum = addTabs(stringNum, str.tab);
    return _.extend(str, {stringNum: stringNum, noteNum: noteNum, note: numberToNote[noteNum]});
  }));

};

Guitar.prototype.changeNote = function(string, fret){
  this.fretInts[string] = (fret + this.tuningInts[string])%12;
  this.fretNotes[string] = numberToNote[this.fretInts[string]];
};

Guitar.prototype.currentChords = function(string, fret){

}