//! 타입 스크립트의 인터페이스

//? 1. 인터페이스의 개념 

// 기본 형태 

type PersonType = {
    name: string;
    age: number;
}

interface PersonInterface {
    name: string;
    age: number;
}

function greet(Person: PersonInterface) {
    return `Hello ${Person.name}, ${Person.age}`;
}

{
    interface Car {
        brand: string;
        year?: number;
    }
}

//! 읽기 전용 속성 정의
interface Point{
    readonly x: number;
    readonly y: number;
} 

//? 타입 스크립트 인터페이스 역할
// 1. 타입 체킹
// 2. 코드의 가독성 향상
// 3. 코드 재사용
// 4. 확장 가능성: 한 인터페이스가 다른 인터페이스를 확장(상속)하여 사용 가능

//? 함수 타입 & 인텍서블 타입의 인터페이스

interface GreetingFunc {
    (name: string): string;
}

interface StringArray {
    (name: string): string;
}

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
}

interface Shape {
    color: string;
}

interface Square extends Shape{
    sideLength: number;
}

interface User{
    name: string;
}

interface User {
    age: number;
}

interface UserType {
    name: string;
    age: number;
}