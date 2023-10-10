const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://skaalab:p59hd8cbo7Y4McaV@cluster0.obzjonh.mongodb.net/", {
   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

module.exports=mongoose.connection; 