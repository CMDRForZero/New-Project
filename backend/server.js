const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:8081',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
});

app.get("/", (req, res) => {
    res.json({ message: "First opening" });
});


require('./app/route/event.route.js')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


