"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    getRadius() {
        return this._radius;
    }
    setRadius(value) {
        this._radius = value;
    }
    toString() {
        return `vong tron la " ${this.getRadius()}`;
    }
}
exports.Circle = Circle;
