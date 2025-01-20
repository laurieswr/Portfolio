const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// Middleware pour parser le body du formulaire
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route pour traiter le formulaire
app.post('/send-email', (req, res) => {
    const { email, message } = req.body;

    // Vérification si les champs sont présents
    if (!email || !message) {
        return res.status(400).send('L\'email et le message sont obligatoires.');
    }

    // Configuration du transporteur pour l'email
    const transporter = nodemailer.createTransport({
        service: 'gmail',  // Si vous utilisez Gmail
        auth: {
            user: 'sewelllau99@gmail.com',  // Remplacez par votre email
            pass: 'cove hqsd vgpe chtx'  // Remplacez par votre mot de passe ou un mot de passe d\'application
        }
    });

    // Paramètres de l'email
    const mailOptions = {
        from: email,  // Email de la personne qui soumet le formulaire
        to: 'sewelllau99@gmail.com',  // Votre adresse email
        subject: 'Nouveau message de ' + email,
        text: message
    };

    // Envoi de l'email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            return res.status(500).send('Erreur interne du serveur. L\'email n\'a pas pu être envoyé.');
        } else {
            console.log('Email envoyé: ' + info.response);
            res.send('Message envoyé avec succès!');
        }
    });
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
