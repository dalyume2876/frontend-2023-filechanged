function greeting(HelloWorld: string): string{
    return "Hello World!"
}

console.log(greeting);

function addNumbers(num1: number, num2:number): number {
    return num1 + num2;
}
console.log(addNumbers(10,20));

function greetings(message: string, name?: string): string {
    return `${message} ${name}`
}

console.log(greetings('Hello'))
console.log(greetings('Hello', "PIAHOUHAo"))

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;

function combine(a: string|number, b: string|number): any{
    if(typeof a === 'string' && typeof b === 'string'){
        return a + b;
    } else if(typeof a === 'number' && typeof b === 'number'){
        return a - b;
    } 
}

console.log(combine('hi', 'hello'))
console.log(combine(1, 2))

const double = (num: number): number => num * 2;

console.log(double(10))