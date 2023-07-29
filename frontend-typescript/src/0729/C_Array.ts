{
    let number: number[] = [1,2,3,4,5]

    // 배열값 더하기
    let sum: number = number.reduce((total, num) => total + num, 0)
    console.log(sum)

    // 짝수만 골라내기
    let evens: number[] = number.filter(num => num % 2 == 0)
    console.log(evens)

    // 각 요소를 제곱하기
    let squares: number[] = number.map(num => num * num)
    console.log(squares)

    // 문자열로 바꾸기
    let strings: string[] = number.map(num => num.toString());
    console.log(strings)
}

