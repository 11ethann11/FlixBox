const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const userProgress = {}; // Base de données simulée pour la progression

// Sauvegarder la progression d'un utilisateur
app.post('/save-progress', (req, res) => {
    const { userId, anime, episode } = req.body;
    if (!userProgress[userId]) userProgress[userId] = {};
    userProgress[userId][anime] = episode;
    res.json({ message: 'Progression sauvegardée.' });
});

// Récupérer la progression d'un utilisateur
app.get('/get-progress/:userId', (req, res) => {
    const userId = req.params.userId;
    res.json(userProgress[userId] || {});
});

// Démarrage du serveur
app.listen(3000, () => {
    console.log('Serveur backend lancé sur le port 3000.');
});
