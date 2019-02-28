function Ball() {
	var self = this;
	var settings = {
		x: 0,
		y: 0,
		r: 20,
		color: 'red',
		vx: 0,
		vy: 0
	}

	Object.keys(settings).map((key) => {
		self[key] = settings[key];
	});

}

Ball.prototype.draw = function (ctx) {
	ctx.save();
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}