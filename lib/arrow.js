function Arrow() {
	var settings = {
		x: 0,
		y: 0,
		color: 'red',
		rotation: 0
	}

	Object.keys(settings).map((key) => {
		this[key] = settings[key];
	});
}

Arrow.prototype.draw = function (ctx) {
	ctx.save();
	ctx.translate(this.x, this.y);
	ctx.rotate(this.rotation / 180 * Math.PI);
	ctx.scale(3, 3);
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.moveTo(-20, -5);
	ctx.lineTo(10, -5);
	ctx.lineTo(10, -10);
	ctx.lineTo(20, 0);
	ctx.lineTo(10, 10);
	ctx.lineTo(10, 5);
	ctx.lineTo(-20, 5);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}