const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post'); // Correct

mongoose.connect("mongodb+srv://palima_db:seanfelix4201@palima999.g4jho.mongodb.net/?retryWrites=true&w=majority&appName=palima999")
    .then(() => {
        console.log('Connected to the Database');
    })
    .catch(() => {
        console.log('Connection Failed');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post("/api/post", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added Successfully',
        post: post
    });
});

app.get("/api/posts", (req, res, next) => {
    Post.find()
        .then(documents => {  // ✅ Fixed missing dot (.)
            res.status(200).json({
                message: 'Posts successfully fetched',
                posts: documents
            });
        })
        .catch(error => {
            res.status(500).json({ message: 'Fetching posts failed!' });
        });
});

app.delete("/api/posts/:id", (req, res, next) => {
    Post.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        console.log(req.params.id);
        res.status(200).json({ message: "Post Deleted" });
    });
});

module.exports = app;  // ✅ Fixed incorrect Mongoose export
