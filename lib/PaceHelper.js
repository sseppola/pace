PaceHelper = {
	todayString: function () {
		var now = new Date();
		var dd = now.getDate(),
			mm = now.getMonth(),
			yyyy = now.getFullYear();
		return dd + '.' + mm + '.' + yyyy;
	}
}