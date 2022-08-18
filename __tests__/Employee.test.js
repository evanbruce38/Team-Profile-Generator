const Employee = require('../lib/Employee');

test('set a name', () => {
    const newEmployee = new Employee('Dave', 1, "dave@mail.com");

    expect(newEmployee.name).toBe("Dave");
});

test('set an id', () => {
    const newEmployee = new Employee('Dave', 1, "dave@mail.com");

    expect(newEmployee.id).toBe(1);
});

test('set an email', () => {
    const newEmployee = new Employee('Dave', 1, "dave@mail.com");

    expect(newEmployee.email).toBe("dave@mail.com");
});

test('test for the getName method', () => {
    const newEmployee = new Employee('Dave', 1, "dave@mail.com");

    expect(newEmployee.getName()).toBe("Dave");
});

test('test for the getId method', () => {
    const newEmployee = new Employee('Dave', 1, "dave@mail.com");

    expect(newEmployee.getId()).toBe(1);
});

test('test for the getEmail method', () => {
    const newEmployee = new Employee('Dave', 1, "dave@mail.com");

    expect(newEmployee.getEmail()).toBe("dave@mail.com");
});

test('test for the getRole method', () => {
    const newEmployee = new Employee('Dave', 1, "dave@mail.com");

    expect(newEmployee.getRole()).toBe("Employee");
});
