# users-kata

###  How to run the project

If you want to run the project create a .env file in the root of the project with the same values as in `.env.example` file. Once created execute:
```
npm install && npm start
```
The project is run with ts-node so you shouldn't need to build the app.

### How to run the test

To run the test just execute  `npm run test`

### State of the project

 - Domain has been defined
 - User class and Create user Use Case is developed and tested with unit tests
 - Some elements of the infrastructure had been defined, Db connection, Express router generator, Express app and server, logger
### Next steps
The desired next steps would be
 - Manage errors
 - Add endpoint validation
 - To use dependency injection
 - Create a dockerfile to make it easier to run
 - Add a logger service
 - Create login service
 - Create update and delete services
