# sequelize-typescript-express
Exploring sequelize with typescript and express, 

## To Run application
1. Make sure you have .env file in your root directory

# .env file 
PORT=8000
DATABASE_NAME=sequelize_ts (table should be in your database)
DATABASE_PASS=password
DATABASE_USER=postgres

2. make sure you have pm2 installed
```shell
$ npm install pm2 -g && pm2 install typescript
```
3. start server
```shell
$ npm run start:dev
```
