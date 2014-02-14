PaceHelper = {
	todayString: function () {
		var now = new Date();
		var dd = now.getDate(),
			mm = now.getMonth(),
			yyyy = now.getFullYear();
		return dd + '.' + mm + '.' + yyyy;
	},
	pluralize: function (n, unit) {
		if (n === 0) 
			return "";
		if (n === 1)
			return "1 " + unit;
		if (n > 1)
			return n + " " + unit + "s"
	}
}