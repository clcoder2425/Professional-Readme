// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {

    switch (license) {
      case "MIT License":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      case "Apache License 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      case "GNU General Public License v3.0":
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      case "Mozilla Public License 2.0":
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
   
  }
  return "";
}

// Function to return license link or empty string and no license is choosen
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  }
  return ``;
}

// Function to generate license section of the Readme or return an empty string if no license has been choosen
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `## License:
  This project is licensed under the ${license} license. 
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`
}

// Function to generate Readme markdown
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description:
  ${data.description}

  ## Table of Contents:
  - [Installation Instructions](#Installation-Instructions)
  - [Usage](#Usage-Instructions)
  - [License](#License)
  - [Author](#Author)
  - [Github](#github-link)

  ## Installation Instructions:
  ${data.installation}

  ## Usage Instructions:
  ${data.usage}

  ## Author: 
  ${data.author}

  ## Github link:
  ${data.github}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;