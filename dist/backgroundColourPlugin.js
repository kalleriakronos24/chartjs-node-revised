const { Chart } = require('chart.js');

class BackgroundColourPlugin {
    id = 'chartjs-plugin-chartjs-node-canvas-background-colour';
    constructor(
        _width,
        _height,
        _fillStyle
    ) { 
        this._fillStyle = _fillStyle,
        this._width = _width,
        this._height = _height
    }

    beforeDraw(chart) {
        if (chart.canvas) {
            const ctx = chart.canvas.context
            ctx.save();
            ctx.fillStyle = this._fillStyle;
            ctx.fillRect(0, 0, this._width, this._height);
            ctx.restore();
        }
    }
}

exports.BackgroundColourPlugin = BackgroundColourPlugin;
