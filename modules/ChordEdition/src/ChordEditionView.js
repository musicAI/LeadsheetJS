define([
	'jquery',
	'mustache',
	'modules/core/src/SongModel',
	'utils/UserLog',
	'pubsub',
	'text!modules/ChordEdition/src/ChordEditionTemplate.html',
], function($, Mustache, SongModel, UserLog, pubsub, ChordEditionTemplate) {

	function ChordEditionView(parentHTML, cursor, imgPath) {
		this.cursor = cursor;
		this.el = undefined;
		this.imgPath = imgPath;
		this.initKeyboard();
		this.render();
	}

	ChordEditionView.prototype.render = function() {
		this.el = Mustache.render(ChordEditionTemplate, {
			'imgPath': this.imgPath
		});
	};

	/**
	 * Function called by MainMenuView
	 */
	ChordEditionView.prototype.initController = function() {
		// Chords
		/*$('#chord-visibility').click(function() {
			$.publish('ChordEditionView-toggleChordVisibility');
		});
		$('#delete_chord').click(function() {
			$.publish('ChordEditionView-deleteChord');
		});
		$('#add_chord').click(function() {
			$.publish('ChordEditionView-addChord');
		});

		// Selection
		$('#edit_chord').click(function() {
			$.publish('ChordEditionView-toggleEditChord');
		});*/
		$('#copy_chord').click(function() {
			fn = 'copyChords';
			$.publish('ChordEditionView', fn);
		});
		$('#paste_chord').click(function() {
			fn = 'pasteChords';
			$.publish('ChordEditionView', fn);
		});
	};

	ChordEditionView.prototype.initKeyboard = function() {
		$.subscribe('enter-key', function(el) {
			fn = 'toggleEditChord';
			$.publish('ChordEditionView', fn);
		});
		$.subscribe('ctrl-c-key', function(el) {
			fn = 'copyChords';
			$.publish('ChordEditionView', fn);
		});
		$.subscribe('ctrl-v-key', function(el) {
			fn = 'pasteChords';
			$.publish('ChordEditionView', fn);
		});
	};

	ChordEditionView.prototype.isEditMode = function(mode) {
		if (this.editMode === mode) {
			return true;
		}
		return false;
	};

	ChordEditionView.prototype.unactiveView = function(idElement) {
		this.editMode = '';
		$.publish('ChordEditionView-unactiveView');
	};

	ChordEditionView.prototype.activeView = function(idElement) {
		this.editMode = 'chords';
		$.publish('ChordEditionView-activeView', 'chords');
	};

	return ChordEditionView;
});