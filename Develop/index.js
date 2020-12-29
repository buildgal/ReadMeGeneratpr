const inquirer = require ("inquirer");
const fs = require('fs');
const util = require ("util");

const writeFileAsync = util.promisify(fs.writeFile);

const userQuestion = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is your project title?"
        },

        {
            type: 'input',
            name: 'description',
            message:'Describe your application'
        }, 

        {
            type: 'input',
            name: 'installation',
            message:'What are your installation instructions?'
        },

        {
            type: 'input',
            name: 'Usage',
            message:'What is this application used for?'
        },

        {
            type: 'input',
            name: 'Contribution',
            message:'What are the contribution guidelines?'
        },

        {
            type: 'input',
            name: 'test',
            message:'What are the test instructions?'
        },

        {
            type: 'list',
            name: 'license',
            message:'What license are you using?',
            choices: ["MIT","Apache-2.0","GPL-3.0","BSD-2-Clause","BSD-3-Clause","BSD-4-Clause"]
        },

        {
            type: 'input',
            name: 'username',
            message:'What is your GitHub username?'
        },

        {
            type: 'input',
            name: 'email',
            message:'What is your email address?'
        }

    ])
};

/*
const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.description}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
    */



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, err =>{
        if (err) {
            throw err;
        }else{
          console.log("Success!")
        }
    });
}



// function to initialize program
function init() {
    userQuestion()
    .then((answers) => writeFileAsync('./READNME.md', generateREADME(answers)))
    .catch((err) => console.error(err));

}

// function call to initialize program
init();



