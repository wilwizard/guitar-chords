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


Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

var makeRoot = function(notes, root){
  var temp = [];
  for(var y = 0; y < notes.length; y++){
    var note = notes[y];
    temp.push((note - root).mod(12));
  }
  return temp;
};

var isMajor = function(notes) {
  var hasFifth = _.contains(notes, 7);
  var hasThird = _.contains(notes, 4);
  return hasFifth & hasThird;
};

var isMinor = function(notes) {
  var hasFifth = _.contains(notes, 7);
  var hasMinorThird = _.contains(notes, 3);
  return hasFifth & hasMinorThird;
};

var String = function(options){
  function addTabs(string, tab){
    return (string + parseInt(tab)) % 12;
  }

  var self = this;

  this.string = ko.observable(options.string);
  this.tab = ko.observable(options.tab);

  this.stringNum = ko.computed(function(){
    return noteToNumber[self.string()];
  }, this);

  this.noteNum = ko.computed(function(){
    return addTabs(this.stringNum(), this.tab());
  }, this);

  this.note = ko.computed(function(){
    return numberToNote[this.noteNum()];
  }, this);
};

var Guitar = function(options){
  var self = this;
  self.strings = ko.observableArray(_.map(options.strings, function(str){
    return new String(str);
  }));

  self.stringNumbers = ko.computed(function(){
    return _.map(self.strings(), function(str){
      return str.noteNum();  
    });
  }); 

  self.currentChords = ko.computed(function() {
    var numbers = _.uniq(self.stringNumbers());
    var chords = [];

    for (var x = 0; x < numbers.length; x++) {
      var ajusted = makeRoot(numbers, numbers[x]);
      console.log(ajusted);
      var root = numbers[x];
      if (isMajor(ajusted)) {
        chords.push(numberToNote[root] + 'maj');
      } else if (isMinor(ajusted)) {
        chords.push(numberToNote[root] + 'min');
      }
    }

    return chords;
  });
};

