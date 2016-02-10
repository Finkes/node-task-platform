/// <reference path="./tsd.d.ts" />
import * as express from "express";

var app = express();

app.use(express.static(__dirname + "/../client/static"));


app.listen(3000, () => {
   console.log("listening on port 3000");
});