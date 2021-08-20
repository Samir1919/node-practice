require('dotenv').config();

const express = require('express');
const app = express();

// maybe for frontend
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());



// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// MongoDB
const connectDB = require('./config/db');
connectDB();



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

// otp route
app.use('/otp/', require('./routes/otpRoute'));

// Brand route
app.use('/brand/', require('./routes/brandRoute'));

// Category route
app.use('/category/', require('./routes/categoryRoute'));




app.get('/button', (req, res) => {
    res.send(req.t("ok"));
});



// Page Not founded
// app.use((req, res) => {
//     res.status(404).json({
//         msg: 'Page not founded',
//     });
// });