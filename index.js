// Node_modules required to run ClI.
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const path = require('path');



// Async function main that initilies Cli. 

async function main() {
    console.log(`starting`);

/* Inquirer prompt method utilizing await until questions
   from array of objects userResponse get answered by user.*/

    const userResponse = await inquirer
    .prompt([

        {
            type: "input",
            message: "Please provide your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "Please provide your github profile URL?",
            name: "url_1"
        },
        {
            type: "input",
            message: "Please provide your Email address?",
            name: "email_1"
        },
        {
            type: "input",
            message: "Please provide the project title.",
            name: "project_title"
        },
        {
            type: "input",
            message: "Please provide project details & descriptions.",
            name: "description"
        },
        {
            type: "input",
            message: "Please provide steps and requirements for install of project.",
            name: "installation"
        },
        {
            type: "input",
            message: "Please provide License name (if any).",
            name: "license_name"
        },
        {
            type: "input",
            message: "Please provide github usernames of any contributors including yourself.",
            name: "contributors"
        },
        {
            type: "input",
            message: "Provide any test information (if any).",
            name: "tests"
        }
        ]);


        console.log(`starting`);
        console.log(userResponse);

        
// Storing the user response from prompt questions.

        const Username = userResponse.username;
        const Url_1 = userResponse.url_1;
        const Email_1 = userResponse.email_1;
        const Project_title = userResponse.project_title;
        const Description = userResponse.description;
        const Installation = userResponse.installation;
        const License_name = userResponse.license_name;
        const Contributors = userResponse.contributors;
        const Tests = userResponse.tests;

           
// Api call to retrieving the user data from github.

        //const Response = {
            //getUsername (_username) { 
                //return axios
                  //.get(`https://api.github.com/users/${Username}`)
                  //.catch(_err => {
                    //console.log(`User not found`);
                    //process.exit(1);
                 // });
            //}
        //} 

        //const Response = (function() {
            //axios.get(`https://api.github.com/users/${userResponse.name}`).then(function(res){
                //console.log(res.data, "here with res");
                //this.response = res.data;
                //return this.response;
            //})
       // })(); 
       async function getUsername() {
           try{
               const response = await axios.get(`https://api.github.com/users/${userResponse.name}`)
               return response
           } catch(error){
               console.error(error)
           }

       }
       const Response = getUsername()

        console.log(Response, "here with Response");

    

        //const Response = getUsername(userResponse.name)
        //console.log(Response)
// Storing response data from api call to github.

        //const Data = Response.data;
        const Name = Response.name;
        const Url = Response.html_url;
        const ProfileImage = Response.avatar_url;
        //const Names_Array = Contributors.split(",");
        
        //console.log(Names_Array);

  
// Api call retrieving github data about any project contributors(if any provided).

        // var resultContributor;

        // for ( i = 0; i < Names_Array.length; i++ ) {
        //     var git_username = Names_Array[i];
        //     const Response2 = await axios.get(`https://api.github.com/users/${git_username}`);
        //     var profileImage2 = Response2.data.avatar_url;
        //     var Url_2 = Response2.data.html_url;
        //         resultContributor += (`
        //     \n <img src="${profileImage2}" alt="drawing" width="150" display="inline"/> ${git_username}  GitHubLink: ${Url_2}`);
        // }


// Popullating READme file with user data provided.

    var result = (`
    # ${Project_title} 
    
    ${Description}
    \n* [Installation](#Installation)
    \n* [License](#License)
    \n* [Contributors](#Contributors)
    \n* [Author](#Author)
    \n* [Tests](#Tests)
    ## Installation
    ${Installation}
    ## License 
    This project is licensed under the ${License_name}.
    ## Contributors
    ${userResponse.username}
    
    
    ## Tests
    ${Tests}
        
    ## Author 
    \n**${Username}**
    \nEmail: ${Email_1}
    \nGitHub: ${Url_1}
    \n![ProfileImage](${ProfileImage})
                `);


var writeResult = fs.writeFileSync(path.join(__dirname, '../ReadMeGenerator', 'README.md'), result);
console.log("READme file generated...");
}

main();
