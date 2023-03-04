const { Chart } = require('chart.js');

class BackgroundColourPlugin {
 	id = 'chartjs-plugin-chartjs-node-canvas-background-colour';

 	constructor(
 		_width,
 		_height,
 		_fillStyle
 	) { }

 	beforeDraw(chart) {

 		const ctx = chart.ctx;
 		ctx.save();
 		ctx.fillStyle = this._fillStyle;
 		ctx.fillRect(0, 0, this._width, this._height);
 		ctx.restore();
 	}
 }

 exports.BackgroundColourPlugin = BackgroundColourPlugin;
