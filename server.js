const express = require('express');
const app = express();
// var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// parse application/json 
// app.use(bodyParser.json());
app.use(express.json());

// MongoDB
const connectDB = require('./config/db');
// const { findOne } = require('./models/category');
connectDB();

// Page Not founded
// app.use((req, res) => {
//     res.status(404).json({
//         msg: 'Page not founded',
//     });
// });

const PORT = process.env.PORT || '5000';

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});


// translation
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');

i18next
    .use(Backend)
    .use(middleware.LanguageDetector)
    .init({
        fallbackLng: 'en',
        backend: {
            loadPath: './locales/{{lng}}/translation.json'
        }
    })
app.use(middleware.handle(i18next));

// route
// Brand route
app.use('/brand/', require('./routes/brand.route'));

// Category route
app.use('/category/', require('./routes/categoryRoute'));




app.get('/button', (req, res) => {
    res.send(req.t("ok"));
});