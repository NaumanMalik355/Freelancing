const Login = require("../models/Login");

exports.handleSignInAttempt = (req,res) =>{
  console.log("SIGN IN ATTEMPT FROM :" , req.body.username)
  Login.findOne({username: req.body.username,password:req.body.password}, (err, account) => {
    if (err) {
       console.log("Error in Server " +account)
      res.status(500).send({'signInStatus':'failure','err':err});
    }
    if(account != null || account != undefined ){
      console.log("Account found")
        res.status(200).send({'signInStatus':'authorized','userId':account._id,'err':err});
      }
      else{
        console.log("Account not found")
          res.status(200).send({'signInStatus':'not_authorized','err':err});
  }
});
}

exports.getAllAccounts = (req,res) =>{

  console.log("Get all accounts ")
  Login.find({}, (err, accounts) => {
    if (err) {
      console.log("ERROR in database............");
      res.status(500).send(err);
    }
    
    res.status(200).json(accounts);
  });
}

//show all
exports.handleAttempFindOneTodo = (req, res) => {
  query = {userId : req.params.userId}
  Login.find()
  .then(data => {
    
      res.status(200).json({'founded':'yes','datalist':data});
  }).catch(err => {
    if(err){
      res.status(500).json({'founded':'not','err':err});
    }
  });
};