var Filters = {};

Filters.grayscale = function(pixels, args) {
	var d = pixels.data;
	for (var i = 0; i < d.length; i += 4) {
		var r = d[i],
			g = d[i + 1],
			b = d[i + 2];

		var gs = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
		d[i] = d[i+1] = d[i+2] = gs;
	}

	return pixels;
};

Filters.brightness = function(pixels, adjust) {
	adjust = adjust || 10;
	
};