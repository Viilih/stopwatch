(function () {
	const clockTimer = document.querySelector('.clock-timer');
	let seconds = 0;
	let timer;
	// Create a funciton that format the date
	function formatDate(seconds) {
		const date = new Date(seconds * 1000);
		return date.toLocaleTimeString('pt-BR', {
			hour12: false,
			timeZone: 'GMT',
		});
	}

	// Add a click event for each button on the timer (start,stop and reset)
	document.addEventListener('click', e => {
		const element = e.target;
		if (element.classList.contains('start')) {
			clearInterval(timer);
			timer = setInterval(() => {
				seconds++;
				clockTimer.innerHTML = formatDate(seconds);
			}, 1000);
		}
		if (element.classList.contains('stop')) {
			clearInterval(timer);
		}
		if (element.classList.contains('reset')) {
			clearInterval(timer);
			clockTimer.innerHTML = '00:00:00';
			seconds = 0;
		}
	});
})();
