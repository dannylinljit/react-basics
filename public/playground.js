class Car {
	constructor() {
		this.wheels = 4;
		this.type = 'Hatchback';
	}
}

class Ford extends Car {
	constructor() {
		super();

		this.windows = 4;
	}
}

const ford = new Ford();

console.log(ford);
