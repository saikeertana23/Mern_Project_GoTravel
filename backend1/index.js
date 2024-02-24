// const express = require('express')
// const app = express()
// const port = 5000
// const mongoDB = require("./db")
// // import mongoDB from './db'
// // const connectToMongoDB = require("./db");
//  mongoDB();
// // connectToMongoDB();

// app.get('/', (req,res)=>{
//     res.send('Hello World')
// })

// app.listen(port, ()=>{
//     console.log(`example app listening on port ${port}`)
// })


// const express = require('express');
// const app = express();
// const port = 5000;
// const mongoDB = require("./db");

// mongoDB(); // Call the function to connect to MongoDB

// app.get('/', (req, res) => {
//     res.send('Hello World----');
// });

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     )
//     next();
// })

// app.use(express.json())
// app.use('/api', require("./Routes/CreateUser"))
// app.use('/api', require("./Routes/DisplayData"))

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });


// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 5000;
// const mongoDB = require("./db");

// mongoDB(); // Call the function to connect to MongoDB

// app.get('/', (req, res) => {
//     res.send('Hello World----');
// });

// // Use the cors middleware to handle CORS headers
// app.use(cors({
//     origin: "http://localhost:3000", // Allow requests from this origin
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true, // Allow sending cookies
//     optionsSuccessStatus: 204 // Respond with a 204 status for preflight requests
// }));

// app.use(express.json());
// app.use('/api', require("./Routes/CreateUser"));
// app.use('/api', require("./Routes/DisplayData"));

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });


const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const mongoDB = require("./db");
mongoDB(); // Call the function to connect to MongoDB

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });

app.use(cors())
app.use(express.json());
app.use('/api', require("./Routes/createuser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.get('/',(req,res)=>{
    res.send("hello world!-----")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// const express = require('express');
// const app = express();
// const port = 5000;
// const connectToMongoDB = require("./db");

// const startServer = async () => {
//     await connectToMongoDB(); // Connect to MongoDB and fetch data

//     // Start your express server
//     app.get('/', (req, res) => {
//         res.send('Hello World');
//     });

//     app.listen(port, () => {
//         console.log(`Example app listening on port ${port}`);
//     });
// };

// startServer();