class Tone {
	constructor(light, main, dark) {
		this.light = light;
		this.main = main;
		this.dark = dark;
	}
}

class ColorSchema {
	constructor() {
		this.primary = new Tone('#42a5f5', '#1976d2', '#1565c0');
		this.secondary = new Tone('#ba68c8', '#9c27b0', '#7b1fa2');
		this.error = new Tone('#ef5350', '#d32f2f', '#c62828');
		this.warning = new Tone('#ff9800', '#ED6C02', '#e65100');
		this.info = new Tone('#03a9f4', '#0288d1', '#01579b');
		this.success = new Tone('#4caf50', '#2e7d32', '#1b5e20');
	}

	updateSchema(section, tone, value) {
		if (value) {
			this[section][tone] = value
		}
		return this;
	}
}

export default ColorSchema;