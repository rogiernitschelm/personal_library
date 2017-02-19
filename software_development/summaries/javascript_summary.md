# ES6

## ES6 variables

const:    cannot be redeclared, but its value can change
let:      can be redeclared


## ES6 importing

    import React, { Component } from 'react';
    import SomeFile from "./relative_path/some_file";
    import { someObject } from "./relative_path/some_file";


## ES6 Template strings

Works only with backtics.

    const NAME = "Rogier";
    const AGE = 100;

    `Hello, I am {NAME} and I am {AGE} old.`


## ES6 fat arrow function

### Multi-line statement:

    (a, b) => {
      return a + b
    }

### Single-line statement:

    // no curly braces needed
    // implicit return

    const add = (a, b) => a + b

### Single-argument:

    a => console.log(a)


## ES6 enhanced object literals

non-enhanced:

    function createShop(inventory){
      return { inventory : inventory }
    }

enhanced:

    function createShop(inventory){
      return { inventory }
    }


## ES6 default function arguments

Allows for default arguments in case no argument is given:

    function someStateFunction(state = []){}
    function someIncrementer(number = 0){}
    function awesomeAjaxFunction(method = "GET"){}
    function someFunction(null){}


## ES6 rest-operator

Destructuring arguments

    function(arg1, arg2, arg3, argX){}
    function(...arguments){}

Rest and an array

    const array = [1, 2, 3]
    const array2 = [a, ...b] // [1, 2, 3]


## ES6 spread-operator

    const someNumbers = [1, 2, 3];
    const someOtherNumbers = [4, 5, 6];
    const allNumbers = [...someNumbers, ...someOtherNumbers];
    console.log(allNumbers) // [1, 2, 3, 4, 5, 6]


## ES6 classes

defining a class:

    class Fruit {
      constructor(options){
        this.name = options.name
      }
    }

    const fruit = new Fruit(name: "Apple")

    class Car extends Vehicle {
      constructor(options) {
        super(options);

        this.color = options.color
      }

      super.someParentMethod()
    }

setter and getter:

    class Person {
      constructor(name) {
        this.$name = name;
        this.$age = 0;
      }

      get name() {
        return this.$name
      }

      set age(age) {
        return this.$age = age
      }
    }

static:

    class Person {
      static greet() {
        console.log("hello")
      }
    }

    // this can be used WITHOUT instantiating.


## ES6 for-of-loop

    const colors = ["blue", "red", "yellow"]

    for (let color of colors) {
      console.log(color)
    }


## ES6 destructuring

### Objects:

    someObject.apple // "golden delicious"
    someObject.orange // "delicious orange yumyum"

    const { apple, orange } = someObject;
    const { apple: goldenDelicious, orange } = somEObject;
    // apple is now only accessible as goldenDelicious


    eatFruit({ apple }){
      console.log("yum yum! ", apple);
    }

### Arrays:

    const companies = [ "uber", "apple", "facebook" ]
    companies[0] // "uber"
    companies[1] // "apple"

    const [ companyOne, companyTwo ] = companies
    companyOne // "uber"
    companyTwo // "apple"

    let numbers = [1, 2, 3]
    let [a, ,c] = numbers // [1, 3]

    // or

    let [a, b] = [1, 2, 3] // 1, 2

### Combination:

    const companies = [
    { name: "google", location: "USA"},
    { name: "alibaba", location: "China" }
    ];

    const [{ location }] = companies // "USA"

### Another example:

    const Google = { locations: ["USA", "Ireland"] }
    const { locations: [ location ] } // "USA"


## ES6 String-methods

    "String".startsWith("S"); // true
    "String".endsWith("z"); // false
    "String".includes("ing"); // true

    "repeat".repeat(3); // repeatrepeatrepeat

## ES6 Number-methods

    isNan("a") // true
    isNan("1") // false

    Number.isInteger(1.0); // false
    Number.isInteger(1); // true

## ES6 array-methods

A list of ES6-array methods:

- forEach
- map
- filter
- find
- every
- some
- reduce


### ES6 array-methods syntax

forEach:

    itemArray.forEach((item) => {
      console.log(item);
    });

map:
    oldArray.map((number) => {
      newArray.push(number);
    });

filter:

    carsArray.filter((car) => {
      return car.color === 'blue';
    });

find:

    usersArray.find((user) => {
      return user.name === "Rogier";
    });

every:

    computersArray.every((computer) => {
      return computer.type === "Apple";
    });

some:

    computersArray.some((computer) => {
      return computer.type === "Dell";
    });

reduce:

    numbersArray.reduce((sum, number) => {
      return sum + number;
    }, 0);

reduce (with array):

    let initialArray = [];

    itemsArray.reduce((array, item) => {
      array.push(item)
      return array;
    }, []);

## Sets

    const set = new Set(["1", 2, "three"])
    set.has(2); // true
    s.size(); // 3

## Maps

    const data = { value: "age" };
    const map = new Map([[name, "rogier"], [data, 10]])

    map.get(name); // "rogier"
    map.get(data); // 10

    map.set("a", "b");
    map.get("a"); // b

## Modules

    module FastMath {
        export function sin() { /*...*/ }
        export function cos() { /*...*/ }
    }

    import {sin, cos} from FastMath;

## Promises

Used for async actions.

### Promise declaration:

    const promise = new Promise((resolve, reject) => {

      if (... true) {
        resolve('it worked!');
      }

      if (... false) {
        reject(Error('it didn't work));
      }

    });

### Promise usage:

    promise.then((result) => {
      console.log(result); // "it worked!"
    }, (error) => {
      console.log(error) // Error: "it didn't work!"
    });

## Fetch

Returns a promise.

### Fetch usage:

    fetch('https://someurl.com/some/data', {
      method: 'get'
    })

    .then((response) => {
      'do something'
    })

    .catch((error) => {
      'do something else'
    });


## ES6 generator

Example 1:

    function* gen() {
      yield 1;
      yield 2;
      yield 3;
    }

    var g = gen(); // "Generator { }"
    g.next();      // "Object { value: 1, done: false }"
    g.next();      // "Object { value: 2, done: false }"
    g.next();      // "Object { value: 3, done: false }"
    g.next();      // "Object { value: undefined, done: true }"

Example 2:

    function* shopping() {
      const stuffFromStore = yield "cash";
      const cleanClothes = yield "laundry";

      return [stuffFromStore, cleanClothes]

    }

    const gen = shopping();
    gen.next('groceries'); { "value": "cash", "done": false }
    gen.next('clean clothes'); { "value": ["groceries", "clean clothes"], "done": true }

to yield into another generator within a generator, use yield*
