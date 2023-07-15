const {connectdb} = require('./connects');
const {Books} = require('./schemas');
const books_controller = require('./controllers');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());


connectdb()
    .then(()=>{
        console.log("database connected successfullyy..!!!!!")
    })
    .catch((err)=>{
        console.log(err)
    });


app.post('/api/books',books_controller.insertbook);
    
const port = 9001;
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})