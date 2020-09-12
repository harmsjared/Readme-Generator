# Readme-Generator

AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
<br>

Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:
node index.js

The user will be prompted for their GitHub username, which will be used to make a call to the GitHub API to retrieve their email and profile image. They will then be prompted with questions about their project.

It utilizes the inquirer module from, npm to prompt the users with questions from cli.

It utilizes the 'FS' or File System module from, npm to write a new file (readme.md) (using Markdown syntax).

It also utilizes Nodejs axios library to make Api call to GitHub for user data.

Here's what the CLi looks like (gif of readme Generator).

![](ReadMe.gif)
<br>

# Minimum Requirements
<br>
Functional, deployed application.

GitHub repository with a unique name describing project.

The generated README includes a bio image from the user's GitHub profile.

The generated README includes the user's email.

The README will be populated with the following:

Project title

Description

Installation

License

Contributing

Tests

Questions

User GitHub profile picture
User GitHub URL
User email
GIVEN the developer has a GitHub profile and a repository

WHEN prompted for the developer's GitHub username and repo specific information

THEN a README for the repo is generated
<br>

# License
This project is licensed under the MIT. 
<br>

# Contributors
Jared Harms: Developer
<br>

# Author
Jared Harms
Email: harms.jared@outlook.com
GitHub: https://github.com/harmsjared