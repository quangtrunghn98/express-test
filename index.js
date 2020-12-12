const express = require('express');
var cookieParser = require('cookie-parser');

const usersRouter = require('./routes/users.route');
const authRouter = require('./routes/auth.route');
const authMiddleware = require('./middlewares/auth.middleware');

const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')

app.use(cookieParser())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.render('index',)
})

app.use(express.static('public'));

app.use('/users', authMiddleware.requireAuth, usersRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })