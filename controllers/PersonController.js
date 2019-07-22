const Person = require("../models/Person");
exports.handleCreate = (req,res) =>{
    
      Person.findOne({email: req.body.email}, (err, account) => {
        if (err)
        {
          console.log("Error in Server " +account)
          res.status(500).send({'myStatus':'failure','err':err});
        }
        if(account != null || account != undefined )
        {
          console.log("Account found")
          res.status(200).send({'myStatus':'existing','email':account.email});
        }
        else{
            console.log("Account not found, create account")
            let newAccount = new Person(req.body)
            newAccount.save((err, account) => {
              if (err) {
                console.log("failure in creating account",err);
                res.status(200).json({'myStatus':'failure','err':err});
              }
              else{
                console.log("account created",err);
                res.status(200).json({'myStatus':'created','detailll':account});
              }
          });
    
      }
    });
    }


    
//show all
exports.handleAttempFindOneTodo = (req, res) => {
    // query = {userId : req.params.userId} 
    
  /* first method  
  Person.find(query)
    .then(data => {
        res.status(200).json({'founded':'yes','datalist':data});
    }).catch(err => {
      if(err){
        res.status(500).json({'founded':'not','err':err});
      }
    });
  };*/
  Person.find({}, (err, account) => {
    if (err)
    {
      console.log("Error in Server " +account)
      res.status(500).send({'Foundstatus':'backendfailure','err':err});
    }
 if(account != null || account != undefined)
    {
      console.log("Account found"+account+"ahhd")
      res.status(200).send({'Foundstatus':'Yesho','personlist':account});
    }
    else{
        console.log("not Account found")
            res.status(200).json({'Foundstatus':'notfound','found':'none'});
       

  }
});
}



    