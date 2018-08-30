const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers'); //los helpers quedan registrados en hbs, para poder usarlos sólo hay que referenciar el archivo

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

//express hbs engine
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'gustavo'
            //anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Gustavo'
            //anio: new Date().getFullYear()
    });
});








// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'Gustavo',
//         edad: 27,
//         ciudad: 'Cartagena',
//         url: req.url
//     }
//     res.send(salida)
// });


// app.get('/data', (req, res) => {
//     res.send('Página de data');
// });

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});