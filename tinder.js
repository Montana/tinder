function checkTinder() {
	return window.location.href.startsWith("https://tinder.com/app/recs");
}

function trickTinder() {
  
	var className = 'recsGamepad__button End(15px)';
	document.getElementsByClassName(className)[0].click();

	if (document.getElementsByClassName('productButton__subscriptionButton').length > 0) {
		// We get the counter thing
		var hms = document.getElementsByClassName('Fz($ml)')[0].textContent

		var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2])
		
		return seconds * 1000;
	}
}

function checkOkCupid() {
	return window.location.href.startsWith("https://www.okcupid.com/doubletake");
}
function trickOkCupid() {
	// Press the like button
	document.getElementsByClassName('cardactions-action--like')[0].click();
}

function getRandomPeriod() {
	return Math.round(Math.random() * (2000 - 500)) + 500;
}

(function loopSasori() {
  
	var randomPeriod = getRandomPeriod();
	setTimeout(function() {
		randomPeriod = undefined;
		if (checkTinder()) {
			var delay	= trickTinder();
			if (delay) {
				console.log('Too many likes for now, have to wait: ' + delay + ' ms');
				randomPeriod = delay;
			}
		}
		if (checkOkCupid()) {
			trickOkCupid();  
		}
		if (!randomPeriod) {
			loopSasori();
		}
		else {
			setTimeout(loopSasori, randomPeriod);
		}
	}, randomPeriod);
}());
