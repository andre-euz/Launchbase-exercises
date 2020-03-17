const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const courses = require('./data');

server.use(express.static('public'));

server.set('view engine','njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
        name: "Rocketseat",
        description: "Plataforma de educação em tecnologia",
        techs: [
            "Javascript",
            "NodeJS",
            "HTML",
            "CSS"
        ],
        links: [
            { name: "Github", url: "https://github.com/rocketseat" },
            { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/" },
            { name: "Facebook", url: "https://pt-br.facebook.com/rocketseat/" }
        ]
    }

    return res.render("about",{ about });
});

server.get("/content", function(req, res) {
    return res.render("content", { courses });
});

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;

    const course = courses.find(function(course) {
        return course.id == id;
    })
    if (!course) {
        return res.status(404).render("not-found");
    }

    return res.render("courses",{ course });
  });

server.listen(5000, function() {
    console.log("Server is running!");
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });