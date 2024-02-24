// const mongoose = require('mongoose')
// const mongoURI = 'mongodb+srv://gotravel:gotravel@cluster0.5y1xi8s.mongodb.net/?retryWrites=true&w=majority'
// const mongoDB = ()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("connected successfully");
//     })
// }
// module.exports = mongoDB;

// const mongoose = require('mongoose');
// // const mongoURI = 'mongodb+srv://gotravel:gotravel@cluster0.5y1xi8s.mongodb.net/?retryWrites=true&w=majority'
// const mongoURI = 'mongodb+srv://gotravel:gotravel@cluster0.5y1xi8s.mongodb.net/?retryWrites=true&w=majority';
// const mongoDB = async() =>{
//     await mongoose.connect(mongoURI, {useNewUrlParser: true},async(err,result)=>{
//         if(err) console.log("---", err)
//         else{
//           console.log("connected");
//           const fetched_data = await mongoose.connection.db.collection("place_items");
//           fetched_data.find({}).toArray(function( err,data){
//             if(err) console.log(err);
//             else {
//          global.place_items = data;
//          console.log(global.place_items)
//             }
//           })
//     }
//     })
// }
// module.exports = mongoDB;



// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://gotravel:gotravel@cluster0.5y1xi8s.mongodb.net/?retryWrites=true&w=majority';
// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true });
//         console.log("Connected to MongoDB");

//         const fetched_data = await mongoose.connection.db.collection("place_items");
//         const data = await fetched_data.find({}).toArray();
//         console.log();
//     } catch (err) {
//         global.place_items = data;
//         // console.log(global.place_items)
//     }
// };
// module.exports = mongoDB; 



const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://gotravel:gotravel@cluster0.5y1xi8s.mongodb.net/?retryWrites=true&w=majority';
const mongoURI = 'mongodb+srv://gotravel:gotravel@cluster0.5y1xi8s.mongodb.net/gotravelmern?retryWrites=true&w=majority';
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");
        // const fetched_data = await mongoose.connection.db.collection("place_items");
        // const data = await fetched_data.find({}).toArray();
        // console.log(data);
        // Optionally, you can return the data or perform other actions with it
        // return data;
    } catch (err) {
        console.log("---", err);
    }
};
module.exports = mongoDB;

// async function mongoDB() {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true });
//     console.log('Connected to MongoDB');

//     // Code for fetching and logging data
//     const fetched_data = await mongoose.connection.db.collection("place_items");
//     const data = await fetched_data.find({}).toArray();
//     console.log(data);

//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//   }
// }

// module.exports = mongoDB;



// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://gotravel:gotravel@cluster0.5y1xi8s.mongodb.net/?retryWrites=true&w=majority';

// const connectToMongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true });
//     console.log("Connected to MongoDB");

//     const fetched_data = await mongoose.connection.db.collection("place_items");
//     fetched_data.find({}).toArray(function(err, data) {
//       if (err) console.log(err);
//       else console.log(data);
//     });
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err.message);
//   }
// };

// connectToMongoDB();

// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://gotravel:gotravel@cluster0.5y1xi8s.mongodb.net/?retryWrites=true&w=majority';

// const connectToMongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true });
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error.message);
//     }
// };

// module.exports = connectToMongoDB;

// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://gotravel:gotravel@cluster0.5y1xi8s.mongodb.net/?retryWrites=true&w=majority';

// const connectToMongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true });
//         console.log("Connected to MongoDB");

//         // Fetch and log data from place_items collection
//         const fetched_data = await mongoose.connection.db.collection("place_items");
//         const data = await fetched_data.find({}).toArray();
//         console.log(data);
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error.message);
//     }
// };

// module.exports = connectToMongoDB;



// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://gotravel:gotravel@cluster0.5y1xi8s.mongodb.net/?retryWrites=true&w=majority';

// const connectToMongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true });
//         console.log("Connected to MongoDB");

//         // Fetch and log data from place_items collection
//         const fetched_data = await mongoose.connection.db.collection("place_items");
//         const data = await fetched_data.find({}).toArray();

//         // Log the fetched data to the console.,
//         console.log("Fetched data from place_items:", data);
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error.message);
//     }
// };
// module.exports = connectToMongoDB;
