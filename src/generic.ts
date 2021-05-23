const firstCars: string[] = ['Ford', 'Audi']

const secondCars : Array<string> = ['Ford', 'Audi']

const promise = new Promise<string>(resolve => {
    setTimeout(() =>{
        resolve('Promise Resolved')
    }, 2000)
})

promise.then(data => {
    console.log(data.toLowerCase().trim())
})


function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'Oleg'}, {age: 19})

console.log(merged)
 
const merged2 = mergeObjects({model: 'Ford'}, {year: 2000})

const merged3 = mergeObjects({a:1}, {b: 2})
console.log(merged3)


interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string}{
    return{
        value,
        count: `In this object ${value.length} symbols`
    }
}

console.log(withCount('Hi ts'))
console.log(withCount(['I', 'Am', 'Array']))
// console.log(withCount(20))
console.log(withCount({a:1, length: 20}))

function getObjectValue<T extends object, R extends keyof T>(obj:T, key: R){
    return obj[key]
}

const person = {
    name: 'oleg',
    age: 19
}
console.log(getObjectValue(person, 'name'))


class Collection<T>{

    constructor( private _items: T[] = []) {}

    add(item: T){
        this._items.push(item)
    }
    remove(item: T){
        this._items = this._items.filter(i => i !== item)
    }
    get items(): T[]{
        return this._items
    }
}

const strings = new Collection(['i', 'am', 'string'])
strings.add('!')
strings.remove('am')
console.log(strings.items)

interface Car{
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car{
    const car: Partial<Car> ={

    };
    
    if (model.length >3){
        car.model = model
    }
    if (year >200){
        car.year = year
    }
    return car as Car
}

const cars: ReadonlyArray<string> = ['Ford', 'Audi']
cars[1]

const ford: Readonly<Car> =  {
    model: 'Ford',
    year: 2020
}
// ford.model = 'Ferrari' error - (readonly)
