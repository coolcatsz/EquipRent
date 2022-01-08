const path = require('path');
const { app, passport } = require('./app');
const PORT = process.env.PORT || 3000;
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');

app.get('*', (req, res) => {
  res.sendFile(path.resolve(CLIENT_PATH, 'index.html'));

});

app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});