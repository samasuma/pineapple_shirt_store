require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve your static files from 'public' directory

app.get('/', (req, res) => {
    res.render('index', {
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY // Use the actual environment variable name
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
