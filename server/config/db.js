// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/yourdbname", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ MongoDB connected successfully");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;



const mongoose = require('mongoose');

var mongoURL = "mongodb+srv://gauravraj:Mongo%40raj11@cluster0.cddlpyx.mongodb.net/FoodApp?retryWrites=true&w=majority" ;

 const connectDB = async () => {
    try {
      await mongoose.connect(mongoURL).then(()=> console.log("database conected"));
  
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1); // Exit the process with failure
    }
  };

  module.exports = connectDB;

