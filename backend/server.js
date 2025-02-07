import express from 'express';
import cors from 'cors';
import 'dotenv/config';

//App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

//api endpoints
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

app.listen(port, () => console.log('Server listening on PORT: ' + port));

