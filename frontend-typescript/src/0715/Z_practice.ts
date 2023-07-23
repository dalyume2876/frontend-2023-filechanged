// Status라는 리터럴 타입을 선언( 'student' 또는 'teacher' 중 하나의 값만 가짐)
type Status = 'student' | 'teacher';

// Person이라는 타입을 선언 ( 이 타입은 name (문자열)과 age (숫자)라는 두 개의 필드 포함)
type Person = {
  name: string;
  age: number;
}

// Details라는 타입을 선언 ( 이 타입은 status (위에서 선언한 Status 타입)와 subject (문자열)라는 두 개의 필드 포함) 
type Details =  {
  status: Status;
  subject: string;
}

// Person과 Details를 합쳐 SchoolPerson이라는 인터섹션 타입 생성
type SchoolPerson = Person & Details;

// SchoolPerson 또는 문자열을 가질 수 있는 SchoolPersonOrString이라는 유니온 타입을 선언
type SchoolPersonOrString = SchoolPerson | string;

// SchoolPersonOrString 타입의 입력을 받아서
// 1. 입력이 SchoolPerson일 경우, ${name} is a ${status} who teaches ${subject}. They are ${age} years old. 
// 형태의 문자열을 반환하고

// 2. 입력이 문자열일 경우 Hello, ${input}! 
// 형태의 문자열을 반환하는 process라는 함수를 작성
function process2(input: SchoolPersonOrString): string {
  return typeof input === "string" 
    ? `Hello, ${input}!` // input이 문자열일 경우
    : `${input.name} is a ${input.status} who teaches ${input.subject}. They are ${input.age} years old. `; // input이 SchoolPerson일 경우
}

// 작성한 함수를 출력: SchoolPerson 객체와 문자열을 생성해서 process함수에 전달 후 콘솔에 출력

let seungah: SchoolPerson = {
  name: 'SeugnAh',
  age: 99,
  status: 'teacher',
  subject: 'typescript'
};

console.log(process2(seungah));
console.log(process2('junkuk'));

//! 유니언 타입을 활용한 계산기 함수

// 사칙연산(더하기, 빼기, 곱하기, 나누기)을 수행하는 calculate 함수입니다.
// 해당 함수는 연산자로 사용할 문자열("add" | "substract" | "multiply" | "divide")과 두 개의 숫자를 인자로 받아야 합니다.
// 이 연산자 문자열은 명시적으로 위에서 제시한 4가지 리터럴 중에 하나만을 인자로 받아야 합니다.
// 또한 함수의 반환 값은 계산 결과인 숫자여야 합니다.

type Operation = "add" | "substract" | "multiply" | "divide";

function calculate(Operation: Operation, a: number, b: number): number {
    switch(Operation) {
        case "add": return a + b
        case "substract": return a - b
        case "multiply": return a * b
        case "divide": return a / b
    }
}

console.log(calculate("add", 4, 2))
console.log(calculate("divide", 4, 2))
console.log(calculate("multiply", 4, 2))
console.log(calculate("substract", 4, 2))

//! 리터럴 타입을 활용한 예제

// 타입이 left, right, up, down인 Direction 타입 별칭
// 해당 Direction 타입 중 하나를 인자로 받아서 해당 방향으로 이동하는 명령을 출력합니다.
// >> 콘솔창에 템플릿 문자열을 사용해서 Moving 인자

// 함수 move를 작성하세요
// 이 함수는 명시적으로 위에서 제시한 4가지 리터럴 중 하나만을 인자로 받아야 합니다.

{
    type Direction = "left" | "right" | "up" | "down"
    
    function move(Direction: Direction) {
        console.log(`Moving ${Direction}`)
    }
    
    move("left")
    move("right")
    move("up")
    move("down")
}