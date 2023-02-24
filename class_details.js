/*
class ClassName{
    constructor(){

    }
    method_one(){

    }
}
*/
class Student {
    constructor(name, classYear, birthday) {
        this.name = name;
        this.classYear = classYear;
        this.birthday = birthday;
        this.roll = (Math.random() + 1).toString(36).substring(3);
    }
    student_age(){
        return Math.floor((new Date() - new Date(this.birthday))/31536000000);
    }
}
let newStudent = new Student('Masuda', '8', '2000-01-01');
console.log(newStudent);
console.log(newStudent.student_age());