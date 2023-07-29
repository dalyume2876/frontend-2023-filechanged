type Studentscore = {
    name: string
    score: number
}

// 평균 구하기
function calculateAverage(score: Studentscore[]): number{
    let total = score.reduce((sum, score) => sum = sum + score.score, 0)
    return total / score.length
}

//? 최고점수 학생 찾기
function findTopStudent(score: Studentscore[]): Studentscore {
    return score.reduce((topStudent, student) => (student.score > topStudent.score ? student : topStudent), score[0])
}

// 합격한 학생
function getPasslist(score: Studentscore[], passScore: number): Studentscore[] {
    return score.filter(score => score.score >= passScore)
}

let StudentScores: Studentscore[] = [
    { name: 'A', score: 85 },
    { name: 'B', score: 75 },
    { name: 'C', score: 100 },
    { name: 'D', score: 95 },
    { name: 'E', score: 80 },
]

// 학생 평균 구하기
console.log(calculateAverage(StudentScores));

// 최고 점수의 학생 찾기
console.log(findTopStudent(StudentScores));

// 합격점이 85점 이상 합격인 학생 찾기
console.log(getPasslist(StudentScores, 85));