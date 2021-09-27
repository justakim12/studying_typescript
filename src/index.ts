// Basic Types
let id: number = 5
let company: string = 'Traversy Media'
let isPublised: boolean =  true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]

//Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
]

//Union
let pid: string | number 
pid = '22'

//Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction1.Left)

//Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

//Type Assertion
let cid: any = 1
let customerId = cid as number 
//let customerId = <number>cid

//Functions
function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(1,2))

//Void type
function log(message: string | number): void {
    console.log(message)
}

log(4)

//Interfaces
interface UserInterface {
    readonly id: number,
    // read only. can't write
    name: string
    age?: number
    // optional
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

//Classes
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(1, 'Mike Kim')

console.log(brad, mike)

console.log(brad.register())

//Subclass using extends
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

console.log(emp.register())

//Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let stringArray = getArray<string>(['brad', 'John', 'Jill'])