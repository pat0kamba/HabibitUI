const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://danewika:10681@habitimdb.hra07pf.mongodb.net/?retryWrites=true&w=majority&appName=HabitiMDB";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch{
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}



// Prompt user for input
async function handleUserInput() {
    try {
      const eventData = await inquirer.prompt([
        {
          type: 'input',
          name: 'date',
          message: 'Enter the date (YYYY-MM-DD):',
        },
        {
          type: 'input',
          name: 'time',
          message: 'Enter the time:',
        },
        {
          type: 'input',
          name: 'title',
          message: 'Enter the title:',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Enter the description:',
        },
        {
          type: 'input',
          name: 'workers',
          message: 'Enter the workers (comma separated):',
        },
        {
          type: 'input',
          name: 'equipment',
          message: 'Enter the equipment:',
        },
      ]);
      await insertEvent(eventData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      await client.close();
    }
  }
  
  // Insert event data into MongoDB
  async function insertEvent(eventData) {
    const database = client.db('calendar'); // Database name
    const collection = database.collection('events'); // Collection name
  
    await collection.insertOne(eventData);
    console.log('Event inserted successfully');
  }
  
  // Retrieve and display all calendar events
  async function displayEvents() {
    const database = client.db('calendar');
    const collection = database.collection('events');
  
    const events = await collection.find().toArray();
    console.log('Calendar Events:');
    events.forEach(event => {
      console.log(`Date: ${event.date}, Time: ${event.time}, Title: ${event.title}`);
      console.log(`Description: ${event.description}`);
      console.log(`Workers: ${event.workers}`);
      console.log(`Equipment: ${event.equipment}`);
      console.log('-------------------------------------------');
    });
  }
  
