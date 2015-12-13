describe("Guitar", function(){

  var guitar;

  function createGuitar(){
    guitar = new Guitar({
      tuning: ["E", "A"], 
      frets: [0,2]
    });

    guitar.setUp();
  };

  ddescribe("#initialize", function(){
    createGuitar();    

    it("converts notes to numbers", function(){
      expect(guitar.get('tuning')).toEqual(["E","A"]);
      expect(guitar.get('notes')).toEqual([4,11]);
    });
  });

  
});