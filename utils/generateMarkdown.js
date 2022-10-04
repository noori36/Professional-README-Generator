// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Mozilla") {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
  } else if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache") {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "Boost") {
    return "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
  }
    else if (license === 'None') {
    return ''
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(badgeURL, license) {
  if (license === "Mozilla") {
    return `[${badgeURL}](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "MIT") {
    return `[${badgeURL}](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[${badgeURL}](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Boost") {
    return `[${badgeURL}](https://www.boost.org/LICENSE_1_0.txt)`;
  }
    else if (license === 'None') {
    return ''
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `

      License used for this project - ${license}
      * For more information on license types, please reference this website
      https://choosealicense.com/
      ---
    `
  } else {
    return ''
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  ${data.description}
  ${renderLicenseLink(renderLicenseBadge(data.license), data.license)}
  <br>[A deployed version can be viewed here.](${data.URL})
  
  ---
  ## Contents
  1. [About](#about)
  2. [User Story](#user%20story)
  3. [Visuals](#visuals)
  4. [Installation](#installation)
  5. [License](#license)
  6. [Contributing](#contributing)
  7. [Tests](#tests)
  8. [Authors and acknowledgment](#authors%20and%20acknowledgment)
  ---
  ## About
    ${data.about}
  ---
  ## User Story
    
  ---
  ## Visuals:
    ![]()
  ---
  ## Installation:
    ${data.installation}
    To clone the repo:
        git clone ${data.clone}
    
  ---
  ## License

  ${renderLicenseSection(data.license)}
  ---
  ## Contributing:
    
    To contribute to this application, create a pull request.
    Here are the steps needed for doing that:
    - Fork the repo
    - Create a feature branch (git checkout -b NAME-HERE)
    - Commit your new feature (git commit -m 'Add some feature')
    - Push your branch (git push)
    - Create a new Pull Request
    Following a code review, your feature will be merged.
  ---
  ## Tests:
    ${data.test}
  ---
  ## Authors and Acknowledgments
    ${data.author}
  ---
  ## Contact Information:
  * GitHub Username: [${data.userName}](${data.repo})
  * GitHub Email: ${data.userEmail}

`;
}

module.exports = generateMarkdown;
