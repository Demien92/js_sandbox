export default class Color {
    constructor(r,g,b) {
        Object.assign(this, { r, g, b });
    }

    toString() {
        const result = [];
        for (let key in this) {
            result.push(Math.round(this[key]));
        }

        return `rgb(${result.toString()})`;
    }

    static each(obj, color, fn) {
        for (let key in obj) {
            obj[key] = color || fn(obj[key]);
        }
    }

    toBlack() {
        Color.each(this, '0', null);
    }

    toWhite() {
        Color.each(this, '255', null);
    }

    getLightness() {
        return Object.keys(this)
            .reduce((sum, item) => sum + this[item],0) / Object.keys(this).length;
    }

    toGrayscale() {
        Color.each(this, this.getLightness());
    }

    invert() {
        Color.each(this, null, (value) => 255 - value);
    }

    random() {
        Color.each(this, null, ()=> Math.abs(Math.random() * (0 - 255)));
        return this;
    }

    static toNumber(value, index) {
        return parseInt(value[index]);
    }

    static fromString(str) {
        const val = str.replace(/[^0-9,]/g, "").split(',');
        return new Color(Color.toNumber(val, 0), Color.toNumber(val, 1), Color.toNumber(val, 2));
    }
}