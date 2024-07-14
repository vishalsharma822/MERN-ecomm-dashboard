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

// API for register/signup
app.post('/register', async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    // deleteing password from response send to UI
    result = result.toObject();
    delete result.password;
    resp.send(result);
});

// API for login
app.post('/login', async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            // let result = await user.json();
            resp.send(user);
        }
        else {
            resp.send({ result: "No user found" });
        }
    } else {
        resp.send({ result: "Please enter both email & password !" });
    }
});

app.listen(5000);