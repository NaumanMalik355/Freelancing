// app.js
const cors = require('cors');
const express = require("express");
var path = require('path')
const bodyParser = require("body-parser");
var config=require("./config/db");
const loginController = require("./controllers/LoginController");
const registerController = require("./controllers/RegisterController");
const todoListController = require("./controllers/TodoListController");
const PersonController = require("./controllers/PersonController")
const dataController = require("./controllers/DataController")
const departbookcontroller = require("./controllers/DepartBookController")
const Bookcontroller = require("./controllers/BookController")
const fetchDataController = require("./controllers/fetchDataController")

const app = express();
const port = process.env.PORT || 3301;
//mern stack
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/// Excel Data
// Get  excel data
app
    .route("/api/Accounts/fetchdataa",)
    .get(fetchDataController.fetchData)
// Post
app
    .route("/api/Accounts/createData",)
    .get(fetchDataController.handleCreateData)

// Get
app 
    .route("/api/Accounts/showData",)
    .get(fetchDataController.handleShow)
//Write Data
app
    .route("/api/Accounts/writeDataa",)
    .get(fetchDataController.writeData)
//Delete item
app
    .route("/api/Accounts/delItem/:Number",)
    .get(fetchDataController.delteItem)
// Delete
app
    .route("/api/Accounts/deleData",)
    .get(fetchDataController.delData)
//delete fileitem
app
    .route("/api/Accounts/deleteFile",)
    .get(fetchDataController.deleteFileItem)


///Books
app
    .route("/api/Accounts/enterbook",)
    .post(departbookcontroller.handleEnterBook)

app
    .route("/api/Accounts/updatebook",)
    .post(Bookcontroller.handleBook)

//Data getAllData

app
    .route("/api/Accounts/getAllData/:deptname",)
    .get(departbookcontroller.getAllDat)
app
    .route("/api/Accounts/createdata",)
    .post(dataController.handleEnterData)

app
    .route("/api/Accounts/getdata",)
    .get(dataController.getAllData)

app
    .route("/api/Accounts/deldata",)
    .delete(dataController.deleteData)
  

//Register
app
    .route("/api/Accounts/Register",)
    .post(registerController.handleRegister)

    //Login
  app
  .route("/api/Accounts/findall",)
  .get(loginController.handleAttempFindOneTodo)

  app
    .route("/api/Accounts/SignIn",)
    .post(loginController.handleSignInAttempt)

  app
    .route("/api/Accounts/getAll",)
    .get(loginController.getAllAccounts)

//Todo
    app
    .route("/api/Accounts/TodoList",)
    .post(todoListController.handleAttemptCreatTodo)

    app
    .route("/api/Accounts/getAllTodo",)
    .get(todoListController.handleAttempFindTodo)
    
    app
    .route("/api/Accounts/getOneTodo/:userId",)
    .get(todoListController.handleAttempFindOneTodo)

    //Person
    app
    .route("/api/Accounts/Create",)
    .post(PersonController.handleCreate)

    app
    .route("/api/Accounts/showww",)
    .get(PersonController.handleAttempFindOneTodo)


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
