const Book = require("../models/books");
const departBook = require("../models/departBook");

exports.handleBook = (req,res) =>{
console.log(req)
console.log(req.body);
console.log("DATA ATTEMPT FROM :" , req.body.departname)
console.log("Account not found, create account")
        let newAccount = new Book(req.body)
        newAccount.save((err, account) => {
          if (err) {
            console.log("failure in creating account",err);
            res.status(200).json({'dataStatus':'failure','err':err});
          }
          else{
            console.log("account created and list is "+account);
            //res.status(200).json({'dataStatus':'created','todos':account});
            var query={departname:account.departname}
            
            Book.find(query)
            .then(semesterbookList => {
              console.log("Get all Data "+semesterbookList)

          //  res.status(200).json({'dataStatus':'found','todos':data});
                query = {deptname:account.departname}
                departBook.findOne(query)
               .then(todos => {
                 //res.status(200).json({'todo_status':'found','todos':todos});
                    switch(account.semester){
                    case 1:  var updateSemesterList={semester1:semesterbookList};break;
                    case 2:  var updateSemesterList={semester2:semesterbookList};break;
                    case 3:  var updateSemesterList={semester3:semesterbookList};break;
                    case 4:  var updateSemesterList={semester4:semesterbookList};break;
                    case 5:  var updateSemesterList={semester5:semesterbookList};break;
                    case 6:  var updateSemesterList={semester6:semesterbookList};break;
                    case 7:  var updateSemesterList={semester7:semesterbookList};break;
                    case 8:  var updateSemesterList={semester8:semesterbookList};break;
                    default:break;
                    }
                    departBook.findByIdAndUpdate(todos._id, { $set: updateSemesterList }, { new: true }, (err, doc) => {
                    if (!err) {
        // res.send(doc);
                    console.log("updated successfully");
                res.status(200).send({'questionStatus':'UPDATED', 'data':doc});
                     }
                else { 
                res.status(500).send({'questionStatus':'NOT_UPDATED', 'data':doc}); }
                    });



                  }).catch(err => {
                   res.status(500).json({'todo_status':'not_found','err':err});
                        });
              /*switch(account.semester){
                case 1:  var updateSemesterList={semester1:data};break;
                case 2:  var updateSemesterList={semester2:data};break;
                case 3:  var updateSemesterList={semester3:data};break;
                case 4:  var updateSemesterList={semester4:data};break;
                case 5:  var updateSemesterList={semester5:data};break;
                case 6:  var updateSemesterList={semester6:data};break;
                case 7:  var updateSemesterList={semester7:data};break;
                case 8:  var updateSemesterList={semester8:data};break;
                default:break;
            }*/
  
        /*    departBook.findById(data._id, { $set: updateSemesterList }, { new: true }, (err, doc) => {
    if (!err) {
        // res.send(doc);
        console.log("updated successfully");
        res.status(200).send({'questionStatus':'UPDATED', 'data':doc});
        }
    else { 
        res.status(500).send({'questionStatus':'NOT_UPDATED', 'data':doc}); }
});

*/

            }).catch(err => {
                res.status(500).json({'dataStatus':'not_found','err':err});
           });
          }
      });

  }


// const boooks = require("../models/books");
// exports.updateBook = (req, res) => {
//     var Book={
//       name:req.body.departname,
//       SelectedQuestions:req.body.SelectedQuestions,
//       UnselectedQuestions:req.body.UnselectedQuestions
//     }
//   //here new:true is for to check that is data modified or not. 
//   boooks.findByIdAndUpdate(req.params._id, { $set: Question }, { new: true }, (err, doc) => {
//     if (!err) {
//         // res.send(doc);
//         console.log("updated successfully");
//         res.status(200).send({'questionStatus':'UPDATED', 'data':doc});
//         }
//     else { 
//         res.status(500).send({'questionStatus':'NOT_UPDATED', 'data':doc}); }
// });
// }; 