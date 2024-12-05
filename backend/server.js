const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 8000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Page HTML
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); // Votre formulaire HTML
});

// Envoi d'email via Nodemailer
app.post("/send-email", (req, res) => {
  const { email, message } = req.body;

  // Configurez le transporteur SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail", // Utilisez un service tel que Gmail, Outlook, etc.
    auth: {
      user: "laurieser@gmail.com", // Remplacez par votre email
      pass: "zvif dswq lsul qgdm" // Mot de passe ou App Password (voir sécurité)
    },
  });

  // Configurez les détails de l'email
  const mailOptions = {
    from: email, // Email de l'utilisateur
    to: "laurieser@gmail.com", // Email de destination
    subject: "Nouveau message depuis le formulaire de contact",
    text: message,
  };

  // Envoyer l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Erreur lors de l'envoi de l'email.");
    } else {
      console.log("Email envoyé : " + info.response);
      res.status(200).send("Email envoyé avec succès !");
    }
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
