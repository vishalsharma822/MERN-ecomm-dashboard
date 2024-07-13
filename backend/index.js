const express = require('express');
const cors = require('cors');

require('./db/Config');

const User = require('./db/User');

const app = express();

// const connectDB = async () => {
//     mongoose.connect('mongodb://localhost:27017/mern-ecomm');
//     const productSchema = new mongoose.Schema({}); // to get all products only
//     const product = mongoose.model('products', productSchema);
//     const data = await product.find();
//     console.log(data);
// }
// // console.log(connectDB());
// connectDB();


// express-middleware
app.use(express.json());
app.use(cors());

app.post('/register', async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
});

app.listen(5000);