interface Student{
    name: string;
    age: number;
}

let people: Student[] = [
    { name: "seungah", age: 90 },
    { name: "dokyung", age: 80 },
    { name: "junGook", age: 70 }
]; 

function filterStudent(student: Student[], ageLimit: number):
Student[] {
    return student.filter(student => student.age > ageLimit)
}

const ageLimit = 65;
const filterStudents = filterStudent(people, ageLimit);

console.log(filterStudents)