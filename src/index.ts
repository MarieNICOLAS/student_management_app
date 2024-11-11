const db = require('./config/database').default;
const app = require('./config/express').default;

const PORT = process.env.PORT || 3000;

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



