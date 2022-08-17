const Engineer = require('../lib/Engineer');

test('Set a github', () => {
    const newEngineer = new Engineer('Jacob', 1, 'jacob@mail.com', 'jacobgithub');

    expect(newEngineer.github).toBe('jacobgithub');
});

test('test for get github', () => {
    const newEngineer = new Engineer('Jacob', 1, 'jacob@mail.com', 'jacobgithub');

    expect(newEngineer.getGithub()).toBe('jacobgithub');
});

test("Should check the employee type and display 'Engineer'", () => {
    const newEngineer = new Engineer('Jacob', 1, 'jacob@mail.com', 'jacobgithub');

    expect(newEngineer.getRole()).toBe('Engineer');
});