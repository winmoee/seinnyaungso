require('dotenv').config();

const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const Event = require('./models/Events')
const router = express.Router() // Define router
const uri = process.env.dbURL; 

const app = express()

app.set('view engine', 'ejs')

// Replace <username>, <password>, and <dbname> with your actual credentials
const dbURL = '';

// Middleware to parse form data (from HTML forms)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

mongoose
.connect(uri)
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
        res.render('homepage', { title: 'All event', events: result })
      })
      .catch((err) => {
        console.error(err); 
    })
  })

  // posting a data

app.post('/submit-event', (req, res) => {
  const event = new Event(req.body);
  console.log("Body start")
  console.log(req.body)
  console.log("Body end")
  event.save()
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => {
      console.error(err);
    });
});


// Use the router
app.use('/', router);

// Route to display the form
router.get('/create-event', (req, res) => {
  res.render('form', { title: 'Create New Event' }); // Renders form.ejs
});
  
app.get('/event/:id', async (req, res) => {
  const eventId = req.params.id;

  try {
      const event = await Event.findById(eventId);
      if (!event) {
          return res.status(404).send('Event not found');
      }
      res.send(event); // You can adjust this to render a template or send JSON
  } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
  }
});
