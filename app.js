const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/Form1',(req,res)=>
{
    res.sendFile(__dirname + '/public/form.html')

})

app.post('/submit-form', (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        res.status(400).send('Please fill in all fields.');
        return;
    }
    res.send('Form submitted successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
let formData = [];

app.post('/submit-form', (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        res.status(400).send('Please fill in all fields.');
        return;
    }
    formData.push({ username, email });
    res.send('Form submitted successfully!');
});