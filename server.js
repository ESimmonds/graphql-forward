import graphqlHTTP from "express-graphql";
import schema from "./data/schema";
import express from "express";

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/graphql', graphqlHTTP({ schema, graphiql: false }) )

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
