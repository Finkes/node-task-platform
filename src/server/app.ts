/// <reference path="./tsd.d.ts" />
import * as express from "express";

var app = express();

app.use("/", express.static(__dirname + "/../client"));
app.use("/client", express.static(__dirname + "/../client"));
app.use("/node_modules", express.static(__dirname + "/../../node_modules"));


app.listen(3000, () => {
   console.log("listening on port 3000");
   console.log(__dirname);
});