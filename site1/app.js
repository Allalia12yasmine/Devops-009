const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello Site1!'));
app.listen(port, () => console.log(`Site1 running on port ${port}`));
