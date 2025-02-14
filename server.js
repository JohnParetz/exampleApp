const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Use environment port or 5000

// COMMENT OUT EVERYTHING EXCEPT THE BASIC ROUTE HANDLER FOR TESTING

// app.use(express.json()); // Commented out
// app.use(express.urlencoded({ extended: false })); // Commented out
// const path = require('path'); // Commented out
// app.use(express.static(path.join(__dirname, 'client/build'))); // Commented out

// BASIC ROUTE HANDLER (This is what we're testing)
app.get('/', (req, res) => {
  res.send('Hello World!'); // Simple test output
});

// app.get('/api/recipes', (req, res) => { // Commented out
//   // ...
// });

// app.post('/api/recipes', (req, res) => { // Commented out
//   // ...
// });

// app.get('/api/recipes/:id', (req, res) => { // Commented out
//   // ...
// });

// app.delete('/api/recipes/:id', (req, res) => { // Commented out
//   // ...
// });

// // The "catchall" handler to send back index.html on all other requests
// app.get('*', (req, res) => { // Commented out
//   // res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});