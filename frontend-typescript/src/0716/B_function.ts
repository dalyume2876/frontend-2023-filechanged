//! 타입 스크립트 함수

//? 1. 함수의 선언과 호출
function greets(name: string): string{
    return `Hello ${name}`
}

console.log(greets("yume"))

{
    function greet(name?: string): string {
        if(name) {
            return `Hello ${name}`
        } else {
            return `hi, whats your name?`
        }
    }
    
    console.log(greet("yume"))
    console.log(greet())
}

//! Rest 매개변수
// 0개 이상의 매개변수를 배역으로 전달받는 것을 가능하게 함.
//  개수가 확정되지 않은 매개변수를 함수에 전달가능

{
    function sum(...nums: number[]): number {
        return nums.reduce((a, b) => a + b, 0)
    }

    console.log(sum(1, 2, 3))
    console.log(sum(1, 2, 3, 4, 5))
}

//! 함수 오버로딩
// 1. 함수는 '하나 이상의 타입 시그니처'를 가질 수 있다.
// 2. 함수는 '단 하나의 구현'을  가질 수 있다.
//  여러 형태의 함수 타입을 정의 가능
//  단, 구현은 한 번만 가능.

function doubleString(str: string): string{
    return `${str}${str}`
}

function doubleNumber(num: number): number {
    return (num * 2);
}

function doubleBoolean(arr: boolean[]): boolean[] {
    // concat(): 여러 데이터를 하나의 데이터로 만들어줌
    return arr.concat(arr);
}

{
    function double(str: string): string;
    function double(num: number): number;
    function double(arr: boolean[]): boolean[];

    function double(argument: any) {
        if(typeof argument === 'string'){
            return `${argument}${argument}`
        }else if (typeof argument === 'number') {
            return argument * 2;
        } else if (Array.isArray(argument)){
            return argument.concat(argument)
        }
    }

    const str = double('abc');
    const num = double(5)
    const arr = double([true, false])

    console.log(str)
    console.log(num)
    console.log(arr)
}

//! this 타입
// 함수의 타입 시그니쳐에서 매개변수 가장 앞에 this를 추가
// 타입 시스템에서만 인식되는 '가짜' 매개변수 

interface HTMLElement {
    tagName: string;
}

interface Handler{
    (this: HTMLElement, event: Event, callback: () => void): void;
}

let cb: any;

const onClick: Handler = function(event, cb){
    console.log(this.tagName);
    cb();
}

// this 타입을 void로 명시하는 경우
// : 함수 내부에서 this에 접근하는 것을 방지

interface NoThis{
    (this: void): void;
}

const noThis: NoThis = function() {
    // Property 'a' does not exist on type 'void'
    // this를 void로 선언했기 때문에 함수 내부에서 this에 접근 불가
}