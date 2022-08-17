const Employee = require('../lib/Employee');

test('set a name', () => {
    const newEmployee = new Employee('Dave', 1, "dave@mail.com");

    expect(newEmployee.name)toBe("Dave");
});

