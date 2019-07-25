const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();


//innit middleware
app.use(logger);

//route gets all members
app.get('/api/members', (req, res) => res.json(members));

//route get single member 
app.get('/api/members/:id', (req, res) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));