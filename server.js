'use strict';

const express = require('express');

const PORT = 80;
const HOST = '0.0.0.0';

var charcount = require('./charcount');

const app = express();
app.get('/', (req,res) => {

    var output = {
        'error': false,
        'string': '',
        'answer': 0
    };

    var text = req.query.text;

    if(text === ""){
        output.error = true;
        output.string = "No Text Entered";
    } else if (text === undefined) {
        output.error = true;
        output.string = "Incorrect Parameters Entered";
    } else {
        var answer = charcount.counter(text);
        output.string = 'Contains '+answer+ ' characters';
        output.answer = answer;
    }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(output));
});

app.listen(PORT, HOST);
