var connectionString = process.env.DATABASE_URL || "postgres://root@localhost:5432/shopping";
var pg = require('pg');
var client = new pg.Client(connectionString);
client.connect(function(err, client, done) {
    if (err) {
      done();
      console.log(err);
    }
});

client.query("CREATE TABLE IF NOT EXISTS  users (user_id  SERIAL PRIMARY KEY NOT NULL, username  TEXT NOT NULL, password  TEXT NOT NULL, cart TEXT ARRAY )", 
function(err, result) {
    if (err) {
      throw err;
    }
});

client.query("CREATE TABLE IF NOT EXISTS  user_cart (id SERIAL  PRIMARY KEY NOT NULL, user_id BIGINT , items TEXT ARRAY)", 
function(err, result) {
    if (err) {
      throw err;
    }
});

client.query("CREATE TABLE IF NOT EXISTS  products (products_id  SERIAL PRIMARY KEY NOT NULL, product_name TEXT NOT NULL, product_des TEXT NOT NULL,price INTEGER,picture_dir TEXT);", 
function(err, result) {
    if (err) {
      throw err;
    }
});

  
