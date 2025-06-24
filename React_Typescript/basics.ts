// Primitives: number, string, boolean
// More complex types: arrays, objects

// Primitives

let age: number = 24;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12341;

// Function & types

function add(a: number, b: number): number | string {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function instertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = instertAtBeginning(demoArray, -1);
const stringArray = instertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split(""); // Error: Property 'split' does not exist on type 'number'
