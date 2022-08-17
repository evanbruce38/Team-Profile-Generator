const Intern = require("../lib/Intern");

test('Set a school', () => {
    const newIntern = new Intern('Sam', 1, 'sam@mail.com', 'University of Miami');

    expect(newIntern.school).toBe('University of Miami');
});

test('test for getSchool', () => {
    const newIntern = new Intern('Sam', 1, 'sam@mail.com', 'University of Miami');

    expect(newIntern.getSchool()).toBe('University of Miami');
});

test('test for getRole', () => {
    const newIntern = new Intern('Sam', 1, 'sam@mail.com', 'University of Miami');

    expect(newIntern.getRole()).toBe('Intern');
});