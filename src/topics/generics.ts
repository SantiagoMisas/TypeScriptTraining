export function whatsMyType<T> (argument: T) :T{
    return argument
}

let myString = whatsMyType<string>('Hello, World')
let myNumber = whatsMyType<number>(100)
let myBoolean = whatsMyType<number[]>([1,2,3,4,5])