const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

const config = require('./config/key')
const { User } = require("./models/User");


app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlenght:50
    },
    description:{
        type: String
    }
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);
//module.exports= { Product }

app.get('/', (req, res) => res.send('Hello world'))

app.post('/register', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(400).json({ success: false, err });
    }
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

