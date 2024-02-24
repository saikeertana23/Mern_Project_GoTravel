
// const mongoose = require('mongoose');

// const express = require('express');
// const router = express.Router();

// router.post('/placeData', async (req, res) => {
   
//         try {
//             // await mongoose.connect(mongoURI, { useNewUrlParser: true });
//             // console.log("Connected to MongoDB");
//             const fetched_data = await mongoose.connection.db.collection("place_items");
//             const data = await fetched_data.find({}).toArray();
//             console.log(data);
//             // Optionally, you can return the data or perform other actions with it
//             res.send(data);
//         } catch (err) {
//             console.log("---", err);
//         }
    
// });
//  module.exports = router;

// const mongoose = require('mongoose');
// const express = require('express');
// const router = express.Router();
// router.post('/placeData', async (req, res) => {
//     try {
//         const collection = mongoose.connection.db.collection('place_items');
//         const data = await collection.find({}).toArray();

//         if (data.length === 0) {
//             console.log('No data found in the collection');
//         }

//         console.log('Data to send:', data);
//         res.send(data);
//     } catch (err) {
//         console.error('Error fetching data from the collection:', err);
//         res.status(500).send('Internal Server Error');
//     }
// });
// module.exports = router;



// const mongoose = require('mongoose');
// const express = require('express');
// const router = express.Router();
// router.post('/placeData', async (req, res) => {
//         const collection = mongoose.connection.db.collection('place_items');
//         const data = await collection.find({}).toArray();
//         const placeCategory = await mongoose.connection.db.collection("placeCategory")
//         placeCategory.find({}).toArray()

//         if (data.length === 0) {
//             console.log('No data found in the collection');
//         }
//         console.log('Data to send:', data);
//         res.send(data);
//     } catch (err) {
//         console.error('Error fetching data from the collection:', err);
//         res.status(500).send('Internal Server Error');
//     }
// })
// module.exports = router;

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/placeData', async (req, res) => {
    try {
        const collection = mongoose.connection.db.collection('place_items');
        const data = await collection.find({}).toArray();

        // Assuming you want to use placeCategory data, modify this part accordingly
        const placeCategoryCollection = mongoose.connection.db.collection("placeCategory");
        const placeCategoryData = await placeCategoryCollection.find({}).toArray();

        if (data.length === 0) {
            console.log('No data found in the collection');
        }
        
        // console.log('Data to send:', data);
        res.json({ success: true, data, placeCategoryData }); // Adjust the response as needed
    } catch (err) {
        console.error('Error fetching data from the collection:', err);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

module.exports = router;