class Modarator {
    name;
    role = 'problem solveing all student';
    skill = 'web develper';
    salary;
    constructor(na, sal) {
        this.name = na;
        this.salary = sal;
    }
    startSession() {
        console.log('start a session');
    }
}

const mukta = new Modarator('mukta', 30000);
console.log(mukta);
