const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

//user:dbuser1
// pass:XXipFNGu3xC3NQZS


const uri = "mongodb+srv://dbuser1:XXipFNGu3xC3NQZS@cluster0.vkx55vh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log('db connected');
//   // perform actions on the collection object
//   client.close();
// });
async function run(){
  try{
    await client.connect();
    const userCollection=client.db('test').collection('user');
    const user={name:'shakib', email: 'shakib@gmail.com'};
    const result=await userCollection.insertOne(user);
    console.log(`user inserted with id: ${result.insertedId}`);
  }
  finally{
// await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('whatsup buddy server');
})

app.listen(port, () => {
  console.log('listening');
})