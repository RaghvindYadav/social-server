import schema from "./src/schema/userSchema.js"
import { root } from "./src/resolver/userResolver.js";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import express from 'express';

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/social-server', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  '/graphql/social-server',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL for easy testing in the browser
  })
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
   // Start the server
   app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/graphql/social-server`);
  });
});


  
 