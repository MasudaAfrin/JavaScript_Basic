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

class StudentTwo extends Student {
    constructor(name, classYear, birthday, guardian){
        super(name, classYear, birthday);
        this.guardian = {
            motherName: guardian.motherName,
            fatherName: guardian.fatherName,
        }
    }
    get parents_name(){
        return `father: ${this.guardian.motherName}, mother: ${this.guardian.fatherName}`;
    }
}

let student_info = new StudentTwo('Abc', '1', '2008-01-01',
 {motherName: 'Lorem Ipsum', fatherName: 'Ipsum Zaman'})
 console.log(student_info.parents_name);
 // dif between class setter and normal func is to get call no need to give parenthesis for class.
 console.log("Stduent age " + student_info.student_age());