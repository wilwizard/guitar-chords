describe("Guitar", function(){

  var guitar;

  function createGuitar(options){
    guitar = new Guitar(options);
  };

  describe("initialization", function(){

    it("converts notes to numbers", function(){
      createGuitar({tuning: ['E', 'A']});
      expect(guitar.tuningNotes).toEqual(["E","A"]);
      expect(guitar.tuningInts).toEqual([4,9]);
    });

    it("calculates frets", function(){
      createGuitar({tuning: ['E','A','D'], tabs: [5,4,2]});
      expect(guitar.fretInts).toEqual([9,1,4]);
      expect(guitar.fretNotes).toEqual(['A','Db','E']);
    });
  });

  
});