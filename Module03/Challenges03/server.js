const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.set('view engine','njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false
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
    courses = [
        { logo_url: "https://skylab.rocketseat.com.br/static/64c237ccff807c054339a62d53b4b402.svg",
          title: '<span id="starter">Cursos 100% online e gratuitos</span> para você entrar com o pé direito nas tecnologias mais desejadas do mercado.',
          modules: "7 módulos",
          price: "Gratuito"  
        },
        { logo_url: "https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg",
          title: '<span id="launchbase">Domine programação do zero</span> e tenha acesso às melhores oportunidades do mercado no menor tempo possível.',
          modules: "17 módulos",
          price: "Pago"  
        },
        { logo_url: "https://skylab.rocketseat.com.br/static/83a178a0653dab1d55e2ed7946465975.svg",
          title: 'Treinamento imersivo nas tecnologias mais modernas de desenvolvimento web e mobile para <span id="gostack">quem não tem tempo a perder</span>.',
          modules: "25 módulos",
          price: "Pago"  
        }
    ]
    return res.render("content", { courses });
});

server.listen(5000, function() {
    console.log("Server is running!");
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });