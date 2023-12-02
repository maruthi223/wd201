// => to install npm packages locally use 'npm install package_name' 
// for installing globally use 'npm install --global package_name'
// const minimist = require("minimist");
// const readline = require("readline");

// const lineDetail = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// lineDetail.question(`Please provide your name - `, (name) => {
//   console.log(`Hi ${name}!`);
//   lineDetail.close();
// });

// using minimist to take cli input
const args = require("minimist")(process.argv.slice(2),{
    alias:{
        n : 'name',
        a : 'age'
    },default:{
        greeting : "hello"
    }
});
console.log(args.greeting);