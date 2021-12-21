# availity-registration-form

Full stack MEAN application coding exercise. Create a registration user interface so healthcare providers can join. In order to run the applications for the front-end and the back-end, there are a few steps to take:

### Node

- Have the LTS node version installed. (https://nodejs.org/en/)
- Have nodemon and ts-node installed globally (run `npm i -g nodemon ts-node`)

### Front-end

- Navigate into the web-ui folder. Run `npm i` and then run `ng serve`
- In order to utilize the CSV Parser page, please have this C# application running also (https://github.com/hiranosasuke/availity-csv)

### Back-end

- Navigate into the web-api folder. You will require a .env file to be created with DB_USER, DB_PASS, DB_NAME to be able to connect to the DB. The actual values are not there so please create a mongoDB database beforehand. Once that is done, run `npm run start` and if everything is setup correctly, you will see `Server is running http://localhost:3000... Connected to Mongo *availity* DB :)` in the console
