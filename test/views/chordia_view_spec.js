describe('Chordia', function(){

  var view, $dom = $('<chordia></chordia>');

  beforeEach(function(){
    view = new Chordia({el: $dom})
  });

  ddescribe('#render', function(){
    beforeEach(function(){
      view.render();  
    });

    it("generates 6 strings", function(){
      expect(view.$el.find('.string').length).toEqual(6);
    });

    it("generates 15 frets", function(){
      var firstString = view.$el.find('.string').eq(0);
      expect(firstString.find('.fret').length).toEqual(15);
    });
  });



});