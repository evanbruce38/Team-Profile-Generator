function generateHTML(employeeArray) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
</head>
<body>
  <div class="title-container">
      <h1>My Team</h1>
    </div>
    <div class="card-container">
      ${employeeArray.map(employee => {
          return createCard(employee);
      })
      .join("\n\n")
    }
  </div>
</body>
</html>
  `;
  }

  function createCard(employee) {
    let thirdProp = ''
    let icon = ''
      if (employee.getRole() === 'Manager') {
        thirdProp = `Office Number: ${employee.getOfficeNumber()}`;
        icon = '<i class="fas fa-crown"></i>'
      } else if (employee.getRole() === 'Engineer') {
        thirdProp = `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
        icon = '<i class="fas fa-cogs"></i>'
      } else if (employee.getRole() === 'Intern') {
        thirdProp = `School: ${employee.getSchool()}`;
        icon = '<i class="fas fa-user-graduate"></i>'
      }
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${employee.getName()}</h5>
        <p class="card-text">${icon}     ${employee.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li class="list-group-item">${thirdProp}</li>
      </ul>
    </div>
    `;
  }
  
module.exports = generateHTML;