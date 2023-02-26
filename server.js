import cors from 'cors';
import express from 'express';


const app = express();
const port = process.env.PORT || 3001;


app.use(express.json());
app.use(cors());


app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password
    console.log("username:", username, "password: ", password);
})

app.listen(port, () => {
    console.log("running server on ", port);
})