# Welcome to Flights Service

## Project SetUp

 - clone the project to your local
 - Execute `npm install` on the sane path as of your root directory of thr downloaded project
 - Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
 - Inside the `src/config` folder create a new file `config.json` and then add following piece of json

 ```
  {
  "development": {
    "username": <YOR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flight_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  
}


 ```

 - Once you have added your db config as listed above , go to src folder from your terminal and execute `npx sequelize db:create`
 