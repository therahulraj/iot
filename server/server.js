const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');


var port = process.env.PORT || 3000;
var global_color = 'white';

var app = express();
app.use(cors());
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public', 'index.html'));
    });

//let's see if this sync in the local

//this is just to just to learn more about git.

//this is for second branch.

//let's see if this goes to the remote branch.

//this is the new branch.

//let's see if this new branch thing syncs to the main branch.

app.post('/api/changeColor',urlencodedParser, (req, res) => {
    console.log(req.body.color);
    global_color = req.body.color;
    console.log(global_color);
    res.status(200).send(global_color);

})

app.get('/getCurrentColor', (req, res) => {
    console.log(global_color);
    console.log('get request is being called.');
    res.send({
        color: global_color
    })
})

    app.listen(port, () => {
        console.log(`the server is up on ${port}`);
      })
