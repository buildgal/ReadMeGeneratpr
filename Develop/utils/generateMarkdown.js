// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}

  #### TABLE OF CONTENTS 
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Test](#Test)
  * [License](#License)
  * [GitHub](#GitHub)
  * [Contact](#Contact)


  ## Installation
  ${data.installation}

  ## Usage Information
   ${data.Usage}

  ## Contribution 
  ${data.Contribution}

  ## How to Test 
  ${data.test}

  ## License 
  ${data.license}

  ## GitHub Username 
  @${data.username}

  ## Contact Me 
  Email: [${data.email}]

  




  


`;
}

module.exports = generateMarkdown;
