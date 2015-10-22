define(['modules/core/src/SongModel', 'modules/MidiCSL/src/converters/SongConverterMidi_MidiCSL', 'modules/MidiCSL/src/model/SongModel_midiCSL', 'modules/MidiCSL/src/model/NoteModel_midiCSL', 'tests/test-songs', 'modules/converters/MusicCSLJson/src/SongModel_CSLJson'],
	function(SongModel, SongConverterMidi_MidiCSL, SongModel_midiCSL, NoteModel_midiCSL, testSongs, SongModel_CSLJson) {
	return {
		run: function() {
			test("SongConverterMidi_MidiCSL", function(assert) {

				var msm = new SongModel_midiCSL();
				assert.deepEqual(msm.getSong(), []);

				// Create a song from testSong
				var songModel  = new SongModel();
				var song = SongModel_CSLJson.importFromMusicCSLJSON(testSongs.simpleLeadSheet, songModel);

				var done = assert.async();
				// Convert songmodel to a readable model that we can insert in SongModel_midiCSL
				SongConverterMidi_MidiCSL.exportToMidiCSL(songModel, function(midiSong) {
					var midiSongModel = new SongModel_midiCSL({'song': midiSong});

					var fakeSong = [];
					fakeSong.push(new NoteModel_midiCSL({currentTime:0, duration:4, midiNote:[69,73,76,80], type:'chord'}));
					fakeSong.push(new NoteModel_midiCSL({currentTime:4, duration:4, midiNote:[69,73,76,80], type:'chord'}));
					fakeSong.push(new NoteModel_midiCSL({currentTime:8, duration:4, midiNote:[71,75,78,81], type:'chord'}));
					fakeSong.push(new NoteModel_midiCSL({currentTime:12, duration:4, midiNote:[71,75,78,81], type:'chord'}));
					fakeSong.push(new NoteModel_midiCSL({currentTime:16, duration:4, midiNote:[64,67,71], type:'chord'}));
					fakeSong.push(new NoteModel_midiCSL({currentTime:20, duration:4, midiNote:[64,67,71], type:'chord'}));
					fakeSong.push(new NoteModel_midiCSL({currentTime:24, duration:4, midiNote:[65,69,72,75], type:'chord'}));
					fakeSong.push(new NoteModel_midiCSL({currentTime:28, duration:4, midiNote:[65,69,72,75], type:'chord'}));
					assert.deepEqual(midiSongModel.getFromType('chord'), fakeSong);

					var fakeNote = new NoteModel_midiCSL({currentTime:0, duration:1, midiNote:[69], type:'melody', 'noteIndex':0});
					assert.deepEqual(midiSongModel.getFromType('melody')[0], fakeNote);

					fakeNote = new NoteModel_midiCSL({currentTime:7, duration:1, midiNote:[64], type:'melody', 'noteIndex':8});
					assert.deepEqual(midiSongModel.getFromType('melody')[8], fakeNote);

					fakeNote = new NoteModel_midiCSL({currentTime:2, duration:1, midiNote:[65], type:'melody', 'noteIndex':3});
					assert.deepEqual(midiSongModel.getMelodySoundModelFromIndex(3), fakeNote, 'getmidiSongModel melody from index');
					done();
				});
			});
		}
	};
});
