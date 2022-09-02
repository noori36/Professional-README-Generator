
// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(badge, license) {
  if (license === 'Apache 2.0') {
    return `[${badge}](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'MIT') {
    return `[${badge}](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Apache') {
    return `[${badge}](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'None') {
    return ''
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'None') {
    return ''
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseInput) {
  if (licenseInput !== 'None') {
    return `
    ## License

    License used for this project - ${licenseInput}
    ---
    `
  } else {
    return ''
  }
};


// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}
  ${renderLicenseLink(renderLicenseBadge(data.license), data.license)}

 
  ## Table of Contents

  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usgae)
  3. [Contributing](#contributing)
  4. [Credits](#credits)
  4. [Authors and Acknowledgment](#authors%20and%20acknowledgment)
  5. [License](#license)


  ## Installation:
  '''
    ${data.installation}
  '''


  ## Usage
  ${data.usage}

  The URL of the GitHub repository. ${data.clone}
  <br><img src="${data.upload}" alt="screenshot of starting page" width="350"/>
 

  ## Contributing:
  ${data.contribution}

  
  ## Authors and Acknowledgments

  ${data.author}

  ## Contact Information:

  * GitHub Username: (https://github.com/${data.userName})
  * GitHub Email: (mailto:${data.userEmail})
  

  ---

  ##License

  ${renderLicenseSection(data.license)}


  `;
}

module.exports = generateMarkdown;