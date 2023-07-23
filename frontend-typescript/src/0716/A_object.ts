{
    //객체 타입 지정(!= 오브젝트 리터링)
    // 1. 콜론의 우반에는 값 대신 해당 속성의 타입이 지정
    // 2. 구분자로 콤마(,) 뿐만 아니라 세미콜론(;)도 가능
    // 3. 객체의 값과 동일한 속성명과 원시 타입을 가짐

    const AUT: {
        name: string;
        userCount: number;
    } = {
        name: "A Universal time",
        userCount: 5000
    }
    // 객체 속성에 접근하는 방법
    // value.멤버 또는 value['멤버']

    console.log(AUT.name)
    console.log(AUT['userCount'])
}


// let teacher = {
//     born: number;
//     name: string;
// }

// teacher = {
//     born: 1234,
//     name: "선생"
// }

type Singer = {
    born: number;
    name: string;
}

let rose: Singer = {
    born: 1111,
    name: "rose"
}

let jenny: Singer = {
    born: 1111,
    name: "jenny"
}

//! 선택 속성(프로퍼티)
// 객체의 프로퍼티가 항상 있어야 하는 것 X
//속성명 뒤에 물픔표(?)를 붙여 해당 속성이 존재하지 않을 수도 있음을 표현

const userUnknownHeight: {
    name: string;
    height?: number;
} = {
    name: "나"
}
console.log(userUnknownHeight.name)
console.log(userUnknownHeight.height)

// 읽기 전용 속성
// 속성명 앞에 readonly 키워드를 넣어 해당 속성의 재할당을 막을 수 있음

{
    const user: {
        readonly name: string;
        height: number;
    } = {
        name: "사람",
        height: 175
    }


}

//? 구조적 타이핑
// : 특정 타입을 정확하게 따르는 것 X, 해당 타입의 구조만을 충족할 경우 같은 타입으로 간주

type WithFirstName = {
    firstName: string;
}

type WithLastName = {
    lastName: string;
}

const both = {
    firstName: "yume",
    lastName: "dal"
}

let WithFirstName: WithFirstName = both
let WithLastName: WithLastName = both

console.log(WithFirstName)
console.log(WithLastName)

//? 중첩된 객체 타입

type Poem = {
    author: {
        firstName: string;
        lastName: string;
    }
    name: string;
}

const poem: Poem = {
    author: {
        firstName: "yume",
        lastName: "dal"
    },
    name: "flower"
}

console.log(poem.name)
console.log(poem.author)

{
    type Pages = {
        name: string;
        pages: number;
    }

    type Flag = {
        name: string;
        flag: boolean;
    }

    type Poem = Pages | Flag;

    const poem: Poem = Math.random() > 0.5 ? {name: "dalyume", pages: 10} : {name: "yuuki", flag: true}

    poem.name;

    console.log(poem);
}

//! 교차타입(인터섹션 타입 &)
{
    type Artwork = {
        genre: string;
        name: string;
    }

    type Writing = {
        pages: number;
        name: string;
    }

    type WrittenArt = Artwork & Writing
}

//? 인덱스 서명
// 객체의 속성에 동적으로 접근 가능한 기능
// 객체의 속성명과 타입을 사전에 정의하지 않고도 동적으로 속성 추가 가능

// 기본형태
// 객체 타입 정의 시 대괄호[] 를 사용하여 선언

// [propertyName: indexType]: valueType;
// propertyName: 인덱스 서명에 대한 속성명(보통 문자열, 숫자 타입)
// indexType: 인덱스 타입
// valueType: 해당 인덱스에 접근할 떄 변환되는 값의 타입

// 1. 문자열 인덱스 서명
type Car = {
    brand: string;
    [propertyName: string]: any;
}

const myCar: Car = {
    brand: "BMW",
    color: "blue",
    year: 2023,

}

type NumberArray = {
    [index: number]: number;
}

const myArray: NumberArray = [1,2,3,4,5]