<div align="center">
  <img src="https://pplware.sapo.pt/wp-content/uploads/2016/05/nodejs_04.jpg" width="200px">
  <span> &nbsp &nbsp &nbsp &nbsp</span>
  <img src="https://static.imasters.com.br/wp-content/uploads/2017/09/mongodb-logo-rgb-j6w271g1xn-768x203.jpg" width="200px"> 
  <span> &nbsp &nbsp &nbsp &nbsp</span>
  <img src="https://miro.medium.com/max/3200/1*t9d16DIcJg_-dEg0X_qTWg.png" width="200px">
</div>

<br />

<div align="center">
  <h3> Basic App build with Express, Mongoose and Jason Web Tokens </h3>
  <p> Understanding the basics of these technologies! </p>
</div>

## Requirements
 - Install the <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/"> MongoDB Community Server </a>, or use a cloud solution (e.g: <a href="https://www.mongodb.com/cloud/atlas"> MongoDB Atlas </a>, <a href="https://mlab.com/"> mlab </a>)
 - At the root of the project, you should create a file called '.env'. This file should contain the following environment variables:
```
CONNECTION_STRING="mongodb://<your_connection_string/<database_name>"
PORT=3000
SECRET_KEY=<your_jwt_secret_key>
```

## Clonning and Running
```
git clone https://github.com/BrNaka/express-jwt-mongoose.git
yarn install
yarn dev
```
