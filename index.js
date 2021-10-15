const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter your project's installation instructions.",
        name: "installInst"
    },
    {
        type: "input",
        message: "Please enter any information for the user about using your project.",
        name: "usageInfo"
    },
    {
        type: "input",
        message: "Please enter your project's contribution guidelines.",
        name: "contrGuide"
    },
    {
        type: "input",
        message: "Please enter testing instructions for your project.",
        name: "testInst"
    },
    {
        type: "list",
        message: "What licensing would you like for this project?.",
        name: "license",
        choices: ["Apache 2.0 License","Boost Software License 1.0","BSD 3-Clause License","CC0","Attribution 4.0 International","Eclipse Public License 1.0","GNU AGPL v3","IBM Public License Version 1.0","ISC License (ISC)","The MIT License","Mozilla Public License 2.0","Open Database License (ODbL)","The Perl License","SIL Open Font License 1.1","The Unlicense","TDWFYWPL","The zlib/libpng License"]
    },
    {
        type: "input",
        message: "What is your GitHub Profile?.",
        name: "githubProf"
    },
    {
        type: "input",
        message: "What is your email address?.",
        name: "emailAdd"
    },
    {
        type: "input",
        message: "What is the url of the deployed application.",
        name: "deployedUrl"
    },
    {
        type: "input",
        message: "What is the url of the github repo.",
        name: "repoUrl"
    }
])
.then(({title,description,installInst,usageInfo,contrGuide,testInst,license,githubProf,emailAdd,deployedUrl,repoUrl}) => {
    
    switch(license){
        case "Apache 2.0 License":
            licenseB = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;

        case "Boost Software License 1.0":
            licenseB = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        break;

        case "BSD 3-Clause License":
            licenseB = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        break;

        case "CC0":
            licenseB = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
        break;

        case "Attribution 4.0 International":
            licenseB = '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)';
        break;

        case "Eclipse Public License 1.0":
            licenseB = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
        break;

        case "GNU AGPL v3":
            licenseB = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        break;

        case "IBM Public License Version 1.0":
            licenseB = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
        break;

        case "ISC License (ISC)":
            licenseB = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
        break;

        case "The MIT License":
            licenseB = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;

        case "Mozilla Public License 2.0":
            licenseB = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        break;

        case "Open Database License (ODbL)":
            licenseB = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)';
        break;

        case "The Perl License":
            licenseB = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
        break;

        case "SIL Open Font License 1.1":
            licenseB = '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
        break;

        case "The Unlicense":
            licenseB = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        break;

        case "TDWFYWPL":
            licenseB = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
        break;

        case "The zlib/libpng License":
            licenseB = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
        break;
    }
    
    const readmeText = 
`# ${title}
${licenseB}

### Table of Contents
**[Description.](#description)**</br>
**[Installation Instructions.](#installation-instructions)**</br>
**[Usage Information.](#usage-information)**</br>
**[Contributions.](#contributions)**</br>
**[Testing Instructions.](#testing-instructions)**</br>
**[Questions.](#questions)**</br>
**[Deployed Site.](#desployed-site)**</br>
**[GitHub Repo.](#repository)**</br>

## Description
${description}

## Installation Instructions
${installInst}

## Usage Information
${usageInfo}

## Contributions
${contrGuide}

## Testing Instructions
${testInst}

## Questions
If you have any questions, you can reach me at:</br>

Github:
- ${githubProf}</br>

Email:
- ${emailAdd}

## Deployed Site: 
${deployedUrl}

## Repository: 
${repoUrl}`;

    fs.writeFile(`${title}.md`, readmeText, (err) =>
      err ? console.error(err) : console.log('Success!')
    );
});