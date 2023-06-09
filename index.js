const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const shortid = require('shortid');
const Razorpay = require('razorpay');
const cookieParser = require('cookie-parser');
const { orders, verify } = require('./paymentController');
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.post('/orders', orders)
app.post('/verify', verify)


app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello World" })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}
)
