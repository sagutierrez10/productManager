const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended:true}) );

require("./server/config/config");

require("./server/routes/product.routes")(app);


app.listen(port,()=> console.log(`Listening on port: ${port}`));