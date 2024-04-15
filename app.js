const express = require('express');
const mongoose = require('mongoose');
const loginRouter = require('./routes/login_route');
const signupRouter = require('./routes/signup_route');
const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(4000, () => console.log('Example app is listening on port 4000.'));

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://danewika:8s4G7V4oNgXyZU5q@habitidb1.kqbnzlk.mongodb.net/?retryWrites=true&w=majority&appName=HabitiDB1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
