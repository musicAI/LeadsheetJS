define([
		"modules/AudioComments/src/AudioCommentsController",
		"modules/Builder/src/Builder",
		"modules/ChordEdition/src/ChordEdition",
		"modules/chordSequence/src/SongView_chordSequence",
		"modules/Constraint/src/Constraint",
		"modules/converters/MusicCSLJson/src/main",
		"modules/converters/MusicXML/src/main",
		"modules/core/src/main", // most important module
		"modules/Cursor/src/Cursor",
		"modules/Edition/src/main",
		"modules/FileEdition/src/FileEdition",
		"modules/History/src/HistoryC",
		"modules/HarmonicAnalysis/src/HarmonicAnalysis",
		"modules/Harmonizer/src/Harmonizer",
		"modules/LSViewer/src/main",
		"modules/MainMenu/src/MainMenu",
		"modules/MidiCSL/src/main",
		"modules/NoteEdition/src/NoteEdition",
		"modules/SimilarityAnalysis/src/SimilarityAnalysis",
		"modules/StructureEdition/src/StructureEdition",
		"modules/Tag/src/main",
		"modules/Wave/src/WaveController",
		"utils/main"
	],
	function(
		AudioComments,
		Builder,
		ChordEdition,
		chordSequence,
		Constraint,
		convertersMusicCSLJson,
		convertersMusicXML,
		core,
		Cursor,
		Edition,
		FileEdition,
		HistoryC,
		HarmonicAnalysis,
		Harmonizer,
		LSViewer,
		MainMenu,
		MidiCSL,
		NoteEdition,
		SimilarityAnalysis,
		StructureEdition,
		Tag,
		Wave,
		utils
	) {
		return {
			"AudioComments": AudioComments,
			"init": Builder.init, // init function of the whole LJS, it make it simple to use
			"ChordEdition": ChordEdition,
			"chordSequence": chordSequence,
			"Constraint": Constraint,
			"converters": {
				"MusicCSLJson": convertersMusicCSLJson,
				"MusicXML": convertersMusicXML
			},
			"core": core,
			"Cursor": Cursor,
			"Edition": Edition,
			"FileEdition": FileEdition,
			"HistoryC": HistoryC,
			"HarmonicAnalysis": HarmonicAnalysis,
			"Harmonizer": Harmonizer,
			"LSViewer": LSViewer,
			"MainMenu": MainMenu,
			"MidiCSL": MidiCSL,
			"NoteEdition": NoteEdition,
			"SimilarityAnalysis": SimilarityAnalysis,
			"StructureEdition": StructureEdition,
			"Tag": Tag,
			"Wave": Wave,
			"utils": utils
		};
	}
);