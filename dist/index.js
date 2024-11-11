"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Définir un exemple d'étudiant
const student = {
    id: 1,
    name: 'Myo',
    age: 26,
    classroom: 'Classe A'
};
// Route d'accueil
app.get('/', (req, res) => {
    res.send(`Bienvenue dans le système de gestion des étudiants !`);
});
// Route pour afficher les informations d'un étudiant
app.get('/student', (req, res) => {
    res.json({
        message: 'Détails de l\'étudiant',
        student: student
    });
});
// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
