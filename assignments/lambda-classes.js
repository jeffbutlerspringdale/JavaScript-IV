// CODE here for your Lambda Classes


class Person{
    constructor(char) {
        this.name = char.name;
        this.age = char.age;
        this.location = char.location;
        this.subject = char.subject;
    }
    speak() {
        return `${this.name} Says Hello.`;
    }
    demo() {
        return `Today were learning about ${this.subject}`;
    }
    grade() {
        return `${student.name} receives a perfect score on ${this.subject}`;
    }
    listSubjects() {
        return `${student.favSubjects}`;
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.subject}`;
    }
    sprintChallenge() {
        return `${this.name} has began sprint challenge for ${this.subject}`;
    }
    standUp() {
        return `${this.name} announces to ${this.slackChannel}, @Everyone standy times!`;
    }
    debugsCode() {
        return `${this.name} debugs ${student.name}'s code on${this.subject}`;
    }

}

class instructorClass extends Person{
    constructor(instructorChar){
        super(instructorChar) 
        this.favLanguage = instructorChar.favLanguage;
        this.specialty = instructorChar.specialty;
        this.catchPhrase = instructorChar.catchPhrase;
        this.subject = instructorChar.subject;
    }
    // demo() {
    //     return `Today were learning about ${this.subject}`;
    // }
}

class studenClass extends Person{
    constructor(studetChar){
        super(studetChar) 
        this.previousBackground = studetChar.previousBackground;
        this.className = studetChar.className;
        this.favSubjects = studetChar.favSubjects;
    }
    // listSubjects() {
    //     return `${student.favSubjects}`;
    // }
}

class ProjectManagerClass extends instructorClass{
    constructor(ProjectManagerChar){
        super(ProjectManagerChar) 
        this.gradClassName = ProjectManagerChar.gradClassName;
        this.favInstructor = ProjectManagerChar.favInstructor;
    }
}





const person = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    //speak() as a method
  });

const instructor = new Person({
    name: 'Instructor',
    location: 'Bedrock2',
    age: 47,
    favLanguage: 'JavaScript',
    subject: 'JS',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
    //demo() receives a `subject` string as an argument. and logs 'today we are learning about {subject} where subject is the param passed in 
    //`grade` receives a `student` object nad a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}
  });
  

  const student = new Person({
    name: 'Student',
    age: 17,
    location: 'Bedrock3',
    previousBackground: 'other code bootcamp before lambda',
    className: 'CS132',
    favSubjects: 'CSS'
    //`listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
    //`PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
    //`sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
    //speak() as a method
  });

  const ProjectManager = new Person({
    name: 'Project Manager',
    age: 37,
    location: 'Bedrock',
    gradClassName: 'CS1',
    favInstructor: 'Sean',
    slackChannel: '#HelpChannel',
    // `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
    // `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
    //speak() as a method
  });

  console.log(instructor.speak());
  console.log(instructor.demo());
  console.log(instructor.grade());
  console.log(student.listSubjects());
  console.log(student.PRAssignment());
  console.log(student.sprintChallenge());
  console.log(student.speak());
  console.log(ProjectManager.standUp());
  console.log(ProjectManager.debugsCode());
  console.log(ProjectManager.speak());
