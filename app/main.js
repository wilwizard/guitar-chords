function mod(m, n) {
	return ((m % n) + n) % n;
}

REVERSE_LOOKUP = {
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



var GuitarString = Backbone.Model.extend({
	initialize: function(options){
		this.tuning = options.tuning;
		this.fret = options.fret;

		var noteConvert = {
			'c': 0,
			'c#': 1,
			'db': 1,
			'd': 2,
			'd#': 3,
			'eb': 3,
			'e': 4,
			'f': 5,
			'f#': 6,
			'gb': 6,
			'g': 7,
			'g#': 8,
			'ab': 8,
			'a': 9,
			'a#': 10,
			'bb': 10,
			'b': 11
		};

		this.note = (noteConvert[this.tuning] + this.fret) % 12;
	}
}); 


var StringView = Backbone.View.extend({
	events: {
		'click .fret': 'onClickFret'
	},

	initialize: function(){
		this.setString();
	},

	setString: function(){
		var tuning = this.$('input').val();
		var fret = parseInt(this.$('.down').data('fret'));
		this.model = new GuitarString({tuning: tuning, fret: fret});
	},

	onClickFret: function(e){
		this.$('.fret').each(function(i,fret){
			$(fret).removeClass('down');
		});
		$(e.currentTarget).addClass('down');
		this.setString();
	}
});

var Tuner = Backbone.View.extend({
	events: {
		'click .string': 'onClickString',
		'change input': 'onChangeString'
	},

	initialize: function(){
		this.setGuitar();
	},

	setGuitar: function(){
		var strings = [];
		this.$('.string').each(function(i,string){
			var $string = $(string);
			var stringView = new StringView({el: $string});
			if (!$string.hasClass('off')) {
				strings.push(stringView.model);	
			}
		});
		this.guitar = new Guitar(strings);
	},

	onClickString: function(e){
		$(e.currentTarget).removeClass('off');
		this.setGuitar();
		this.displayChord();
	},

	onChangeString: function(){
		this.setGuitar();
		this.displayChord();
	}, 

	displayChord: function(){
		this.$('.chord').text(this.guitar.chord);
	}

});

$(document).ready(function(){
	 new Tuner({el: $('.tuner')});
});


