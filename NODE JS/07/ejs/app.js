const express = require('express');
const mongoose = require('mongoose');

const Blog = require('./models/blog');

const app = express();

const dbURI = 'mongodb+srv://:@cluster0.6j0u4.mongodb.net/nodejs-app?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
        .then(result => {
          console.log('connected to db');
          const PORT = 3000;
          app.listen(PORT, () => {
              console.log(`Server is running on http://127.0.0.1:${PORT}`);
          });
        })
        .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Sandbox

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 4',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    })

    blog.save()
        .then(result => {
        res.send(result);
        })
        .catch(err => {
        console.log(err);
        });
});

app.get('blog', (req, res) => {
    Blog.find().sort({ createdAt : -1 })
    .then( result => {
        res.render('index', {blogs: result, title: 'All blogs' });
    })
    .catch()
})

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
  
    blog.save()
      .then(result => {
        res.redirect('/blogs');
      })
      .catch(err => {
        console.log(err);
      });
});

app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
});
 
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
