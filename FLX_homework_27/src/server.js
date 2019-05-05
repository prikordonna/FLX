const express = require('express')
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use('/car', routes);

app.get('/car',  res => res.send('Server works!'))

app.listen(port, () => console.log(`App listening on port ${port}!`))