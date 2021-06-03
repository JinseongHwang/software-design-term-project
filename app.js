const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, 'config/.env') });

const app = express();

const indexRouter = require('./routes/indexRouter');
const loginRouter = require('./routes/loginRouter');
const sugangRouter = require('./routes/sugangRouter');

app.use(morgan('dev'));
app.use(express.static('/view'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);

app.set('view engine', 'html');
app.set('views', __dirname + '/view');
app.engine('html', require('ejs').renderFile);

app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/', sugangRouter);

app.listen(process.env.PORT, () => {
  console.log(`Current app listening at http://localhost:${process.env.PORT}`);
});
