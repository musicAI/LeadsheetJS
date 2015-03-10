define(['modules/core/src/BarModel'], function(BarModel) {
	return {
		run: function()
		{
			test("Bar model", function(assert) {

				var bar = new BarModel();

				// begining
				assert.throws(function() {
					bar.setBegining();
				});
				bar.setBegining('test');
				assert.equal(bar.getBegining(), 'test');

				// clef
				assert.throws(function() {
					bar.setClef();
				});
				bar.setClef('treble');
				assert.equal(bar.getClef(), 'treble');

				bar.setClef('');
				assert.equal(bar.getClef(), '');

				// ending
				bar.setEnding();
				assert.equal(bar.getEnding(), undefined);
				bar.setEnding('1');
				assert.equal(bar.getEnding(), '1');
				
				// style
				bar.setStyle();
				assert.equal(bar.getStyle(), '');
				bar.setStyle('Jazz');
				assert.equal(bar.getStyle(), 'Jazz');

				// time signature
				bar.setTimeSignature();
				assert.equal(bar.getTimeSignature(), undefined);

				bar.setTimeSignature('4/4');
				assert.equal(typeof bar.getTimeSignature(), "object");

				// Tonality
				bar.setTonality();
				assert.equal(bar.getTonality(), '');

				bar.setTonality('F');
				assert.equal(bar.getTonality(), 'F');

				// Label
				bar.setLabel();
				assert.equal(bar.getLabel(), '');

				bar.setLabel('Coda');
				assert.equal(bar.getLabel(), 'Coda');

				// SubLabel
				bar.setSublabel();
				assert.equal(bar.getSublabel(), '');

				bar.setSublabel('DC al Coda');
				assert.equal(bar.getSublabel(), 'DC al Coda');
				assert.equal(bar.getSublabel(false), 'DC al Coda');
				assert.equal(bar.getSublabel(true), 'DC_AL_CODA' , 'formated sublabel');

			});

		}
	};
});