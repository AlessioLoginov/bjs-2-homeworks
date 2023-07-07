﻿function parseCount(value) {
	let result = Number.parseFloat(value);
	if (Number.isNaN(Number.parseFloat(value))) {
		throw new Error("Невалидное значение")
	}
	return result;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}
class Triangle {
	constructor(a, b, c) {
		if (a + b < c || b + c < a || a + c < b) {
			throw new Error('Треугольник с такими сторонами не существует');
		};
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return Number.parseFloat((this.a + this.b + this.c));
	}

	get area() {
		let p = 0.5 * this.perimeter;
		return Number.parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}



