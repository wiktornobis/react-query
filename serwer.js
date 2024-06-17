import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Użycie cors
app.use(cors());

const posts = [
    { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, praesentium!', content: 'Content 1' },
    { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, praesentium!', content: 'Content 2' },
    { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, praesentium!', content: 'Content 3' },
];

// Endpoint dla /posts
app.get('/posts', (req, res) => {
    const { _sort } = req.query;
    let sortedPosts = posts;

    if (_sort === 'title') {
        sortedPosts = posts.sort((a, b) => a.title.localeCompare(b.title));
    }

    res.json(sortedPosts);
});

// Uruchomienie serwera
app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
