DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

-- SELECT * FROM PRODUCTS 

INSERT INTO products(product_name, department_name, price, stock_quantity)
values("watches", "jewlery", 10000, 100),
	  ("ipad","electronics", 1000, 50),
      ("MacBook Pro", "electronics", 2500, 250),
      ("pumpkin spice", "food", 5, 300),
      ("sweaters", "clothing", 35, 50),
      ("boots", "clothing", 50, 65),
      ("lamp", "furniture", 30, 15),
      ("desk","furniture", 200, 21),
      ("gaming chair", "furniture", 175, 34),
      ("blanket","home", 20, 40),
      ("space heater", "home", 15, 325),
      ("bottle water (40ct case)","food",5,10000);
      
      SELECT * FROM PRODUCTS