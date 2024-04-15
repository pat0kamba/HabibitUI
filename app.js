const express = require('express');
const mongoose = require('mongoose');
const loginRouter = require('./routes/login_route');
const signupRouter = require('./routes/signup_route');
const app = express();

// app.get('/', (req, res) => {
//   res.send('Successful response.');
// });
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res)=>{
  res.sendFile('index.html');
});
app.get('/contact', (req, res)=>{
  res.sendFile('Contact.html');
});

app.get('/equipment', (req, res)=>{
  res.sendFile('/Equipment.html');
});


app.get('/events', (req, res)=>{
  res.sendFile(__dirname+'/Events.html');
});

app.get('/kitchen', (req, res)=>{
  res.sendFile(__dirname+'/Kitchen.html');
});

app.get('/options', (req, res)=>{
  res.sendFile(__dirname+'/Options.html');
});

app.get('/room', (req, res)=>{
  res.sendFile(__dirname+'/Rooms.html');
});

app.get('/followup', (req, res)=>{
  res.sendFile(__dirname+'/FollowUp.html');
});
app.use(express.json());

app.use('/login', loginRouter);
app.use('/signup', signupRouter); 

app.listen(3000, () => console.log('The app is listening on port 3000.'));

//const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pkamba1804:kyvbap-6ninjy-qixmUv@cluster0.fsqge8h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB!");
    
  } catch(error) {
   
    console.log(error);
  }
}
connect();

// Serving Html pages

//mongodb+srv://pkamba342:PoiQwe1234@cluster0.aesdv0t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// Connection string
// mongodb+srv://pkamba342:<password>@cluster0.aesdv0t.mongodb.net/
// Password:
//kyvbap-6ninjy-qixmUv
// mongodb+srv://pkamba1804:kyvbap6ninjyqixmUv@cluster0.fsqge8h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0