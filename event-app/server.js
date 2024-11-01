require('dotenv').config();

const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const Event = require('./models/Events')

const app = express()

app.set('view engine', 'ejs')

// Replace <username>, <password>, and <dbname> with your actual credentials
const dbURL = '';

// posting a data

app.post('/submit-event', (req, res) => {
    const event = new Event(req.body);
    event.save()
      .then((result) => {
        res.redirect('/');
      })
      .catch((err) => {
        console.error(err);
      });
  });

  //routing path
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
  });

    
mongoose
.connect(process.env.dbURL)
.then((result) => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
})
.catch((err) => {
  console.error('Could not connect to MongoDB:', err);
});



  
// To get all the event

router.get('/', (req, res) => {
    Event.find()
      .then((result) => {
        res.render('index', { title: 'All event', events: result })
      })
      .catch((err) => {
        console.error(err); 
    })
  })
  