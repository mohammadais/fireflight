// this file creates connection
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/firebus", {
useUnifiedTopology: true,
useNewUrlParser: true,
}).then(() => console.log('DB Connected!'))
.catch(error => {
    console.log(Error, error.message);
});
