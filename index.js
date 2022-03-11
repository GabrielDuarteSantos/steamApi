let express = require('express');
let path = require('path');

require('dotenv').config({ 'path': path.join(__dirname, '.env') });

let app = express();
let router = express.Router();

router.get('/', (req, res) => res.json({ 'success': true }));

app.use(router);
app.use(require('cors')());

require(path.join(__dirname, 'app', 'routes.js'))();

let port = process.env.PORT || 5001;

app.listen(port, () => console.log('server listening on port ' + port));