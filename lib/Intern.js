const Employee = require("./Employee");

class Intern extends Employee {
    // properties
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    // methods
    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };
};

module.exports = Intern;