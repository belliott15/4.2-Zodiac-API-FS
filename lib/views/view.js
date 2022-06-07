const app = require('../app');

app.get('/', (req, res) => {
  res.render('index', { title: 'hey', message: 'Hello There!' });
});
