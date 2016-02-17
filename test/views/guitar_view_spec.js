describe('GuitarView', function(){

  var view, $dom = $('<div><div class="fret"></div>'+
              '<div class="fret selected"></div></div>');

  beforeEach(function(){
    view = new GuitarView({el: $dom})
  });

  xdescribe('when clicking on a fret', function(){
    it("selects the fret", function(){

      var firstFret = view.$el.find('.fret')[0];
      var secondFret = view.$el.find('.fret')[1];

      expect(firstFret).not.toHaveClass('selected');
      firstFret.click();
      expect(firstFret).toHaveClass('selected');
    });
  });



});