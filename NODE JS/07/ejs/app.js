const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbURl = 'mongodb+srv://AYVSM:PempekBiru9@nodejs-app.j9v4g.mongodb.net/?retryWrites=true&w=majority&appName=Nodejs-app';
mongoose.connect(dbURl)
        .then(result => {
            console.log('connected to db');
            const PORT = 3000;
            app.listen(PORT, () => {
                console.log(`Server is running on https://127.0.0.1:${PORT}`);
            });
        })
        .catch(err => console.log(err));


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur.'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur.'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur.'},
    ];
    res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'create a new blog' });
});

app.use((req, res) => {
    res.status(404).render('404', { title: "404" });
});