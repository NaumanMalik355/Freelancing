const fetchData = require("../models/fetchData");
var XLSX = require('xlsx');
var fs=require('fs');
const data = 
[
  ["03044373759", "Operator", "malik", "Lahre", "myeamil@gmail.com", "Enginerr"],
  ["03044373759", "Operator", "malik", "Lahre", "myeamil@gmail.com", "Enginerr"],
  ["03044373759", "Operator", "malik", "Lahre", "myeamil@gmail.com", "Enginerr"],
]

exports.writeData = (req, res)=>{
  var animalWS = XLSX.utils.json_to_sheet(data);
  var wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, animalWS, 'data')
  XLSX.writeFile(wb, 'F:/1.xlsx')
  console.log('Done...')
}

// Excel Show Data
  exports.fetchData = (req, res) => {
    var wb = XLSX.readFile('F:/1.xlsx')
    var ws = wb.Sheets["Sheet1"]
    var data=XLSX.utils.sheet_to_json(ws);
    data.forEach(function(dat){
      console.log(dat.Operator)
    })
};

// Show Data
exports.handleShow = async (req, res)=>{
  fetchData.find()
    .then(data => {
      console.log("Get all Data ")
        res.status(200).json({'dataStatus':'found','todos':data});
    }).catch(err => {
    	res.status(500).json({'dataStatus':'not_found','err':err});
   });
}

// From Excel to Database
exports.handleCreateData = (req, res)=>{
    var wb = XLSX.readFile('F:/1.xlsx')
    var ws = wb.Sheets["Sheet1"]
    var data=XLSX.utils.sheet_to_json(ws);
    
  for(var i=0;i<data.length;i++){
    
    let ftchData=new fetchData(data[i]);
    ftchData.Number=data[i].Number;
    ftchData.Operator=data[i].Operator;
    ftchData.Name=data[i].Name;
    ftchData.City=data[i].City;
    ftchData.Email=data[i].Email;
    ftchData.Category=data[i].Category;
    ftchData.save();
    // ftchData.save((err, account)=>{
    //   if (err) {
    //     console.log("failure in creating account",err);
    //     res.status(200).json({'dataStatus':'failure','err':err});
    //   }else{
    //     console.log("account created and list is "+account);
    //     res.status(200).json({'dataStatus':'created','todos':account});
    //   }
    // });  
  }
console.log("Account Created");
}

function ec(r, c){
  return XLSX.utils.encode_cell({r:r,c:c});
}
function delete_row(ws, row_index){
  var variable = XLSX.utils.decode_range(ws["!ref"])
  for(var R = row_index; R < variable.e.r; ++R){
    for(var C = variable.s.c; C <= variable.e.c; ++C){
      ws[ec(R,C)] = ws[ec(R+1,C)];
    }
  }
  variable.e.r--
  ws['!ref'] = XLSX.utils.encode_range(variable.s, variable.e);
}
// delete from file
exports.deleteFileItem = (req, res) => {
var filename = 'F:/1.xlsx'
var workbook = XLSX.readFile(filename)
var worksheet = workbook.Sheets[workbook.SheetNames[0]]
delete_row(worksheet, 4)
XLSX.writeFile(workbook, filename)
console.log('asdasd')
}


// Delete item
exports.delteItem=(req, res)=>{
  var wb = XLSX.readFile('F:/1.xlsx')
  var ws = wb.Sheets["Sheet1"]
  var data=XLSX.utils.sheet_to_json(ws);
  var query=req.params.Number
  
  for(var i=0;i<data.length;i++){
    if(query!=data[i].Number){
      continue;
    } 
    let num=data[i]
  fetchData.deleteOne(num)
  .then(dt=>{
    console.log("Found")
    res.status(200).json({'dataStatus':'found','todos':dt});
  })
  .catch(err=>{
    console.log("Not Found")
    res.status(500).json({'dataStatus':'not_found','err':err});
  })
  }
}


// This code is for delete file and all its data
  // var filePath = 'F:/1.xlsx'; 
  // fs.unlinkSync(filePath);
// Delete From Database
exports.delData = (req,res) =>{
    console.log("Deleting Data!")
    fetchData.deleteMany({}, (err, accounts) => {
      if (err) {
        console.log("ERROR in database............");
        res.status(500).send(err);
      }
      res.status(200).json(accounts);
    });
  }