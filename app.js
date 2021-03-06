const { render } = require('ejs');
const express = require('express');
const { result } = require('lodash');

const mongoose = require('mongoose');
const Blog = require('./models/blog');



// express app
const app = express();


// connect to mongoDB
const dbURI = 'mongodb+srv://nodeJST:test1234@nodejst.sqwow.mongodb.net/nodeJST?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result)=>app.listen(3000))
    .catch((err)=> console.log(err));

// register view engine
app.set('view engine', 'ejs');

// this is only required if we want to use 
// any folder instead of "views" as template folder
app.set('views', 'blog_view'); 

// express middleware to handle form post data
app.use(express.urlencoded({ extended: true }));


// mongoos and mongo routs
// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title: 'Blog Title',
//         snippet: 'Blog snippet',
//         body: 'Details about blog'
//     });

//     blog.save()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
// });

// listen for req


app.get('/', (req, res)=>{
    res.redirect('/blogs');
});

app.get('/about', (req, res)=>{
    res.render('about', { title: 'About'});
});

app.get('/blogs', (req,res)=>{
    Blog.find().sort({ createdAt: -1})
        .then((result)=>{
            res.render('index',{ title:'All Blogs', blogs: result });
        })
        .catch((err)=>{
            console.log(err);
        });
});

app.post('/blogs', (req,res)=>{
    // console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        });
});


app.get('/blogs/create', (req, res)=>{
    res.render('create', { title: 'Create a new Blog'});
});


app.get('/blogs/:id', (req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
        .then((result)=>{
            res.render('details',{ blog: result, title: 'Blog Details'});
        })
        .catch((err)=>{
            console.log(err);
        });
});


app.delete('/blogs/:id',(req, res)=>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result=>{
            res.json({ redirect: '/blogs'});
        })
        .catch(err=>{
            console.log(err);
        });
});


// redirect
app.get('/about-us', (req, res)=>{
    // res.send('<p>home page</p>')
    res.redirect('/about');
});

// 404 page
app.use((req,res)=>{
    res.status(404).render('404', { title: '404'});
});
