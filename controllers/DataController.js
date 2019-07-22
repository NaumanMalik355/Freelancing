const Data = require("../models/Data");

exports.handleEnterData = (req,res) =>{
console.log(req)
console.log(req.body);
console.log("DATA ATTEMPT FROM :" , req.body.name)
  Data.findOne({name: req.body.name}, (err, account) => {
    if (err)
    {
      console.log("Error in Server " +account)
      res.status(500).send({'dataStatus':'failure','err':err});
    }
    if(account != null || account != undefined )
    {
      console.log("Account found")
      res.status(500).send({'dataStatus':'existing'});
    }
    
    else{
        console.log("Account not found, create account")
        let newAccount = new Data(req.body)
        newAccount.save((err, account) => {
          if (err) {
            console.log("failure in creating account",err);
            res.status(200).json({'dataStatus':'failure','err':err});
          }
          else{
            console.log("account created and list is "+account);
            res.status(200).json({'dataStatus':'created','todos':account});
          }
      });

  }
});


}



exports.getAllData = (req,res) =>{
    console.log("Get all Data ")
    Data.find({}, (err, accounts) => {
      if (err) {
        console.log("ERROR in database............");
        res.status(500).send(err);
      }
      
      res.status(200).json(accounts);
    });
  }


  exports.getAllData = (req, res) => {
    //query = {userId : req.params.userId}
   
    Data.find()
    .then(data => {
      console.log("Get all Data "+data)
        res.status(200).json({'dataStatus':'found','todos':data});
    }).catch(err => {
    	res.status(500).json({'dataStatus':'not_found','err':err});
   });
};

exports.deleteData = (req,res) =>{
    console.log("Deleting Data ")
   // query = {dataId : req.params.dataId}
    Data.deleteMany({}, (err, accounts) => {
      if (err) {
        console.log("ERROR in database............");
        res.status(500).send(err);
      }
      res.status(200).json(accounts);
    });
  }

