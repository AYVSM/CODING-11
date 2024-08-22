import express from 'express';
import { fileURLToPath } from 'url';
import { dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello, Express!</h1>')
    res.sendFile('templates/index.html', { root:__dirname});
});

app.get('/about', (req, res) => {
    // res.send('<h1>Hello, Express!</h1>')
    res.sendFile('templates/about.html', { root:__dirname});
});

app.get('/contact', (req, res) => {
    // res.send('<h1>Hello, Express!</h1>')
    res.sendFile('templates/contact.html', { root:__dirname});
});

app.get('/home', (req, res) => {
    // res.send('<h1>Hello, Express!</h1>')
    res.sendFile('templates/index.html', { root:__dirname});
});

// app.get('/about', (req, res) => {
//     res.sendFile('', );
// });

// app.get('/about-us', (req, res) => {
//     res.redirect('about');
// });

//middleware
app.use((req, res) => {
    res.status(404).send('<h1>404, oops not found!</h1>')
})

app.listen(3000);