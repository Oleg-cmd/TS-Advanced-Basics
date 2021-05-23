"use strict";
const firstCars = ['Ford', 'Audi'];
const secondCars = ['Ford', 'Audi'];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise Resolved');
    }, 2000);
});
promise.then(data => {
    console.log(data.toLowerCase().trim());
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Oleg' }, { age: 19 });
console.log(merged);
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2000 });
const merged3 = mergeObjects({ a: 1 }, { b: 2 });
console.log(merged3);
function withCount(value) {
    return {
        value,
        count: `In this object ${value.length} symbols`
    };
}
console.log(withCount('Hi ts'));
console.log(withCount(['I', 'Am', 'Array']));
// console.log(withCount(20))
console.log(withCount({ a: 1, length: 20 }));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'oleg',
    age: 19
};
console.log(getObjectValue(person, 'name'));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['i', 'am', 'string']);
strings.add('!');
strings.remove('am');
console.log(strings.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 200) {
        car.year = year;
    }
    return car;
}
const cars = ['Ford', 'Audi'];
cars[1];
const ford = {
    model: 'Ford',
    year: 2020
};
// ford.model = 'Ferrari' error - (readonly)
//# sourceMappingURL=generic.js.map