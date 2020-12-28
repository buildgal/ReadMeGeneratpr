const inquirer = require ("inquirer");

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
        }
    ])
}
    

//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
const questions = [
];



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

//this is what kicks off the program to write out in the command line
userQuestion()
  //.then((answers) => writeFileAsync('index.html', generateHTML(answers)))
  .then(() => console.log('Successfully wrote to in markup language'))
  .catch((err) => console.error(err));