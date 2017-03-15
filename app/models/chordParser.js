var powerChords = function(notes){
  if(_.isEqual(notes, [0,7])) { return '5'; }
}

var triadChordDictionary = function(notes){
  if(_.isEqual(notes, [0,4,7])) {return  'maj';}
  else if (_.isEqual(notes, [0,3,7])) {return 'min';}
  else if (_.isEqual(notes, [0,3,6])) {return 'dim';}
  else if (_.isEqual(notes, [0,4,8])){return '+';}
  else if (_.isEqual(notes, [0,4,8])){return '+';}
  else if (_.isEqual(notes, [0,5,7])){return 'sus4';}
  else if (_.isEqual(notes, [0,2,7])){return 'sus2';}
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

chordParser = function(notes) {
  if(notes.length === 2) {
    return powerChords(notes);
  } else if(notes.length === 3) {
    return triadChordDictionary(notes);
  }
}