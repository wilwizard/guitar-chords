describe("Guitar", function(){

  var guitar;

  function createGuitar(options){
    guitar = new Guitar(options);
  };

  function transpose(strings){
    var obj = {};
    strings.forEach(function(string){
      for(key in string){
        if(obj[key]){
          obj[key].push(string[key]);
        } else {
          obj[key] = [string[key]];
        }
      };
    });
    return obj;
  };

  describe("#new", function(){

    it("converts notes to numbers", function(){
      createGuitar({tuning: ['E', 'A']});
      
      expect(_.map(guitar.strings(), function(string){
        return string.
      }).toEqual(["E","A"]);
      expect(guitar.tuningInts).toEqual([4,9]);
    });

    it("calculates frets", function(){
      createGuitar({tuning: ['E','A','D'], tabs: [5,4,2]});
      expect(guitar.fretInts).toEqual([9,1,4]);
      expect(guitar.fretNotes).toEqual(['A','Db','E']);
    });
  });

  describe("#changeNote", function(){
    
    it("changes the string", function(){
      createGuitar({tuning: ['E','A','D'], tabs: [5,4,2]});
      guitar.changeNote(0,0);
      expect(guitar.fretInts).toEqual([4,1,4]);
      expect(guitar.fretNotes).toEqual(['E','Db','E']);
    });
  });

  describe("#currentChords", function(){

    it("handles no data", function(){
      createGuitar();
      expect(guitar.currentChords).toBeEmpty();
    });

    it("generates major Chords", function(){
      createGuitar({tuning:['E','A','D'], tabs:[3,2,0]});
      expect(guitar.currentChords()).toContain('Gmaj');
    });

    it("generates minor Chords", function(){
      createGuitar({tuning:['E','A','D'], tabs:[3,1,0]});
      expect(guitar.currentChords()).toContain('Gmin');
    });

  });

  
});