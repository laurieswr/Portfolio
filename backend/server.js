const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 8000;

// Middleware pour analyser les données du formulaire
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
    const { email, message } = req.body; // Récupère les champs "email" et "message"

    if (!email || !message) {
        return res.status(400).send("L'email et le message sont requis.");
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: {email}, // Votre adresse Gmail
            pass: "gijw ivrs ftjv anzk", // Mot de passe ou App Password
        },
    });

    const mailOptions = {
        from: email, // L'email de l'utilisateur
        to: "laurieswr7@gmail.com", // Votre adresse destinataire
        subject: "Nouveau message depuis le formulaire",
        text: `Vous avez reçu un message de : ${email}\n\nMessage : ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send("Erreur lors de l'envoi de l'e-mail.");
        }
        res.status(200).send("E-mail envoyé avec succès !");
    });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
