const express = require('express');
const path = require('path');

const app = express();


app.get('/', function(req, res){
    res.render('client');


});

app.get('/api/customers', (req, res) => {
    const customers = [

        { id: 1, firstName: 'john', lastName: 'emeralds' },
        { id: 2, firstName: 'edd', lastName: 'lowers' },
        { id: 3, firstName: 'ed', lastName: 'wats' },
        { id: 4, firstName: 'johnny', lastName: 'emeraldson' },
        { id: 5, firstName: 'eddy', lastName: 'edwardson' }
    ];
    res.json(customers);
});



const port = 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));
