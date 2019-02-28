window.util = {};

util.getEleOffset = function (ele) {
	console.log(1);
	var offset = {
		x: 0,
		y: 0
	};

	while (ele) {
		offset.x += ele.offsetLeft;
		offset.y += ele.offsetTop;
		ele = ele.offsetParent;
	}

	return offset;
}

util.captureMouse = function (ele) {
	var mouse = {
		x: 0,
		y: 0
	};

	var eleOffset = util.getEleOffset(ele);

	ele.addEventListener('mousemove', function (e) {
		if (e.clientX) {
			mouse.x = e.clientX - eleOffset.x;
			mouse.y = e.clientY - eleOffset.y;
		} else {
			mouse.x = e.pageX - document.documentElement.scrollLeft - document.body.scrollLeft;
			mouse.y = e.pageY - document.documentElement.scrollTop - document.body.scrollTop;
		}
	});
	return mouse;
}