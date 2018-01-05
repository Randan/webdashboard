function printTime() {

	var d = new Date();

	var hours = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();

	const title = document.getElementsByTagName('title');

	const watch = document.getElementById('watch');
	const breakType = document.getElementById('break-type');

	title.innerHTML = hours+':'+mins+':'+secs+' WDSHB';

	watch.innerHTML = hours+':'+mins+':'+secs;

	if (hours == 14) {
		breakType.innerHTML = 'ОБЕД';
		var note = 'ОБЕД';
		//notifyMe(note);
	} else if (hours == 18 && mins >= 29) {
		breakType.innerHTML = 'ПЕРЕКУС';
		var note = 'ПЕРЕКУС';
		//notifyMe(note);
	} else if (hours >= 19 && mins >= 30) {
		breakType.innerHTML = 'ПОРА ДОМОЙ';
		var note = 'ПОРА ДОМОЙ';
		//notifyMe(note);
	} else {
		breakType.innerHTML = '';
	}

}

function notifyMe(note) {
	if (!("Notification" in window)) {
		alert("This browser does not support desktop notification");
	} else if (Notification.permission === "granted") {
		var notification = new Notification(note);
	} else if (Notification.permission !== 'denied') {
		Notification.requestPermission(function (permission) {
			if (permission === "granted") {
				var notification = new Notification(note);
			}
		});
	}
}

setInterval(printTime, 1000);