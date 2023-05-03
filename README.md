# Super Budget tracker

## Description

Using nodeJS, mysql, sequelize, and TailwindCSS paired with Flowbite we were able to create The Super Budget tracker application which is a budget tracking web application that can track your desired budget and the transactions inputted by the user. Our motivation to create this application was so we could have an application to be able to easily track our transactions and to be able to see how much we have spent compared to our set budget. This application solves the problem of not keeping track of the money you spend. During the process of building this application we learned how to utilize Chart.js to render charts using data set by the user from the database. We also learned how to dynmically render a table from the database that relys on the current users session. Some difficultiies we encountered as a team were designing the UI with tailwind and handlebars, as well as difficulties with deleting the budget so the user can update their budget.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployed-Link](#deployed-link)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Future-Development](#future-development)
- [Dependencies](#dependencies)

## Installation

Though this application is served on a server via Heroku you are able to install it following these steps:

1. Clone the repository in the CLI with the following command: ‘git clone https://github.com/Valerigionetnoel/Budget-tracker'
2. Make sure you have nodejs(https://nodejs.org/) and  Mysql(https://www.mysql.com/) installed
3. Through the CLI cd into the Budget-tracker directory
4. Ensure to run the command "npm install" to install the dependencies
5. Ensure you add your mysql password to the .env file
6. Through mysql on the command line or the WorkBenc run the command SOURCE schema.sql to start the database 
7. Use the command "node server.js" to start the server
8. Follow the link into your browser of choice

## Usage

To utlizie this application follow the delployed link: https://thawing-ridge-41865.herokuapp.com/

Once in the application
- Create an acoount
- Create a budget
- Add your transactions!
- You may login again with the same credentials so keep them Safe!

## Deployed Link

The link to the application:

https://thawing-ridge-41865.herokuapp.com/

## ScreenShots

![Our awesome login page](./assets/image/Screenshot%202023-05-03%20at%205.42.22%20PM.png)

![Our awesome Dashboard](./assets/image/Screenshot%202023-05-03%20at%205.39.57%20PM.png)


## Credits

Constributors:

[Chad](https://github.com/APOLAKl)

[Jonson](https://github.com/StunnaDawg)

[Noah](https://github.com/noahbeaton)

[Valeri](https://github.com/Valerigionetnoel)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Refer to license in repo for more information.

## Features

Some features of this application are:

- You can see all your transactions.
- Charts to to be able to easily visualize where your hard earn money is going
- Set a Customizable Budget 

## Future-Development

For future development our plan is to add 
- a delete button to the budget section so a user can easily create a new budget 
- allow the user to create multiple budgets
- A budget calculation feature that would take in the users income and current savings
- A more polished UI
- Utilize the API Plaid to automatically add the users Transactions
- More graphs to showcase different comparisons. This would include comparing previous months of spending
- Explore even more avenues of money tracking

## Dependencies

- nodeJS: https://nodejs.org/en
- mysql2: https://www.mysql.com/
- tailwindCSS: https://tailwindcss.com/
- inquirer: https://www.npmjs.com/package/inquirer
- express: https://www.npmjs.com/package/express
- sequelize: https://www.npmjs.com/package/sequelize
- dotenv: https://www.npmjs.com/package/dotenv
- connect-session-sequelize: https://www.npmjs.com/package/connect-session-sequelize
- bcrypt: https://www.npmjs.com/package/bcrypt 
- handlebars: https://www.npmjs.com/package/handlebars 
- express-handlebars: https://www.npmjs.com/package/express-handlebars 
- express-session: https://www.npmjs.com/package/express-session 
- flowbite: https://www.npmjs.com/package/flowbite
