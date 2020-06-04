let express = require('express');
// let knex = require('knex');
let app = express();
let Item = require('./schema');

let mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/cc", { useNewUrlParser: true, useUnifiedTopology: true  });

mongoose.connection.on('connected', ()=>{
    console.log('connected to mongoDb');
});
mongoose.connection.on('error', ()=>{
    console.log(error);
});

// var knex = require('knex')({
//     client: 'pg',
//     connection: {
//       host : '127.0.0.1',
//       user : 'adarsh',
//       password : 'moti',
//       database : 'test'
//     }
//   });

let bodyPrser = require('body-parser');
app.use(bodyPrser.json());

app.get('/', (req, res)=>{
    res.send('CyberSys cc update')
});

//getall
app.get('/ccall', (req,res,next)=>{
    // res.send('Testing route');
    Item.find(function(err,data){
        if(err){
            res.json(err);

        } else{
            res.json(data);
        }
    });
});

app.post('/postcc', (req, res, next)=>{

    let ccdata = new Item({
        expMonth: req.body.expMonth,
        expYear: req.body.expYear        
    });

    ccdata.save((err,result)=>{
        if(err){
            res.json(err);

        } else{
            console.log(result)
            res.status(201).json({msg: 'Details added to the DB'});
        }
    })

});

//listening 
app.listen(3000, (req, res)=>{
    console.log('Server started');
});

