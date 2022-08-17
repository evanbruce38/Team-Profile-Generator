const Manager = require('../lib/Manager');

test('test for office number of Manager', () => {
    const newManager = new Manager('Evan', 1, 'evan@mail.com', 38);

    expect(newManager.getOfficeNumber()).toBe(38);
});

test("Should check the employee type and display 'Manager'", () => {
    const newManager = new Manager('Evan', 1, 'evan@mail.com', 38);

    expect(newManager.getRole()).toBe('Manager');
});