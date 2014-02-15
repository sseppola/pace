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
	},
	monthName: function () {
		var monthNames = [ "January", "February", "March", "April", "May", "June",
    				"July", "August", "September", "October", "November", "December" ];
		return monthNames[new Date().getMonth()];
	},
	dayOfWeek: function () {
		var d = ['Sunday','Monday','Tuesday','Wednesday',
					'Thursday','Friday','Saturday'];
		return d[new Date().getDay()];
	}
}