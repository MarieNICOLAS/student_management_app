import app from './config/express';
import studentRoutes from './routes/student.routes';

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue dans le système de gestion des étudiants !');
});

app.use('/students', studentRoutes);

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import db from './config/database';

db.raw('SELECT 1')
  .then(() => console.log('Connexion à la base de données réussie'))
  .catch((err) => console.error('Erreur de connexion à la base de données:', err));
