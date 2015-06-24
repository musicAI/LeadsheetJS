define(['modules/core/src/BarModel'], function(BarModel) {
	function BarManager() {
		this.bars = [];
	}

	BarManager.prototype.getTotal = function() {
		return this.bars.length;
	};

	BarManager.prototype.getBars = function() {
		return this.bars;
	};
	BarManager.prototype.setBars = function(bars) {
		this.bars = bars;
	};

	BarManager.prototype.getBar = function(index) {
		if (isNaN(index) || index < 0) {
			throw "BarManager - getBar - invalid index :" + index;
		}
		return this.bars[index];
	};

	/**
	 * @param {BarModel} bar
	 */
	BarManager.prototype.addBar = function(bar) {
		if (typeof bar === "undefined" || !(bar instanceof BarModel)) {
			bar = new BarModel();
		}
		this.bars.push(bar);
		return bar;
	};
	/**
	 * 
	 * @param  {BarModel} bar   
	 * @param  {Integer} index 
	 */
	BarManager.prototype.insertBar = function(indexBar, song, numBars) {
		if (indexBar === undefined || !song){
			throw "BarManager - insertBar - missing params";
		}
		numBars = numBars || 1;
		var barsToInsert = [];
		for (var i = 0; i < numBars; i++) {
			this.bars.splice(indexBar + 1,0, new BarModel());	
		}
		
		var section = song.getSection(song.getSectionNumberFromBarNumber(indexBar));
		section.setNumberOfBars(section.getNumberOfBars() + numBars);
	};

	
	BarManager.prototype.removeBar = function(index) {
		if (typeof index === "undefined" || isNaN(index) || index < 0) {
			throw "BarManager - removeBar - invalid index " + index;
		}
		this.bars.splice(index, 1);
	};
	BarManager.prototype.clear = function() {
		this.bars = [];
	};

	return BarManager;
});