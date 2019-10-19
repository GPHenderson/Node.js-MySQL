var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Username
    user: "root",

    // Password
    password: "Fullstack2019",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    // console.log("Connection" + connection.threadId);

    displayProducts();
 
});
 
function displayProducts() {

inquirer.prompt({
  name: "Buy",
  type: "list",
  message: "Welcome to Bamazon! Would you like to purchase a product?",
  choices: ["YES", "EXIT"]

})

.then(function(response){

  if(response.Buy === "YES") {
    buyProducts();
  } else if (response.Buy ==="EXIT"){
    connection.end();
  }

})
  var productsView = "SELECT * FROM products";

  connection.query(productsView, function(err, results){
    if (err) throw err;

      console.table(results)
    
  })
}

function buyProducts() {
  inquirer.prompt([
  {
    name: "ID",
    type: "input",
    message: "Select a product by entering the item_id number:",
    filter: Number
    
  },
  {
      name: "itemQty",
      type: "input",
      message: "Enter Quantity Amount:",
      filter: Number
  }
])

 .then(function(answer) {
   var unitsNeeded = answer.itemQty;
   var idNeeded = answer.ID;
  checkout(unitsNeeded,idNeeded);
})
}

    
 function checkout(ID ,totalNeeded) {
  connection.query("SELECT * FROM products WHERE item_id = " + ID, function(err, res){
    if(err){
      console.log(err)
    }

    if(totalNeeded<=res[0].stock_quantity){
      var cost = res[0].price * totalNeeded;
      connection.query("UPDATE products SET stock_quantity = stock_quantity - " + totalNeeded + " WHERE item_id = " + ID);

      console.log("Your total is " + cost);

      
    }
    displayProducts();
  })
  
 }
