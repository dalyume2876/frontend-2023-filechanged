
import { TransformStreamDefaultController } from "node:stream/web"; 

type UUID = string;
type Height = number;
type AnotherUUID = UUID;

type Animal = [];
type Animals = Animal[];
type User = {
    name: string;
    height: number;
}

function getUser(uuid: User){
    return `${uuid.name}, ${uuid.height}`;
}

let someUser: User = {
    name: 'asd',
    height: 183
}

console.log(getUser(someUser))

type MyType = boolean | number | string | null | undefined;

let color1: MyType;
let color2: MyType;
let color3: MyType;

//! 할당 가능성( 타입 호환성 )
console.log("할당 가능성");

type OddNumber = 1;
const one: OddNumber = 1;
let num: number = one;
// OddNumber 타입은 number타입에 할당 가능

type OneDigitOdd = 1 | 3 | 5 | 7 | 9;
const three: OneDigitOdd = 3;
num = three;

const four: number = 4;
num = four;
// const one2: OddNumber = four;

//! 타입 어노테이션 (type Annotation): 변수 이름 뒤에 배치되면서 콜론(:)과 타입 이름을 기재하여 타입을 명시하는 것
let phone; 
phone = 'Galaxy';
phone.toUpperCase();

phone = 123;