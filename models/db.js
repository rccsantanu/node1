const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err)=>{
    if(err){
        console.log('Error in db connection :' + err);
    }else{
        console.log("Mongo: Database connected successfully");
    }
});

require('./employee.model');