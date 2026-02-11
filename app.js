const express = require('express');
const app = express();
app.use(express.json());

app.get('/quotes/random', (req, res) => {
    res.json({ quote: 'To be or not to be.' });
});

app.get('/quotes/author/:name', (req, res) => {
    res.json([{ quote: 'Quote 1' }, { quote: 'Quote 2' }]);
});

app.post('/quotes', (req, res) => {
    res.status(201).json({ message: 'Quote added' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
