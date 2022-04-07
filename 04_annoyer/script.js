const annoyer = {
	phrases: [
		'Literally',
		'cray cray',
		"i can't even",
		'Totes!',
		'YOLO',
		"Can't Stop, Won't stop",
	],
	pickPrase() {
		const { phrases } = this;
		const idx = Math.floor(Math.random() * phrases.length);
		return phrases[idx];
	},
	start() {
		this.timerId = setInterval(() => {
			console.log(this.pickPrase());
		}, 3000);
	},
	stop() {
		clearInterval(this.timerId);
		console.log('PHEW THANK HEAVENS THAT IS OVER');
	},
};
