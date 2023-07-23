// ReadOnlyPerson 인터페이스를 생성
// 읽기 전용 속성 "이름"과 "나이", 그리고 메서드 "생일축하"를 가진 인터페이스

interface ReadOnlyPerson {
    readonly name: string;
    age: number;
    celebrate: () => string;
  }
  // 해당 인터페이스를 사용해 객체 구현
  // 메서드이름: celebrate()
  // 메서드에는 해당 필드의 age값을 해당 함수 호출 시 1증가 시킴
  // 메서드 반환 값 "생일 축하합니다. name은 이제 age살 입니다."
  
  let readOnlyPerson: ReadOnlyPerson = {
    name: "doKyung",
    age: 29,
    celebrate: function() {
      this.age += 1;
      return "생일 축하합니다." + this.name + " 이제" +  this.age + " 살 입니다.";
    }
  }
  
  console.log(readOnlyPerson.celebrate());