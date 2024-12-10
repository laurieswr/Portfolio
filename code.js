require("dotenv").config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// code.js

// Fonction pour faire parler le robot
document.getElementById("speakButton").addEventListener("click", function() {
  const message = new SpeechSynthesisUtterance("Bonjour, je suis Laurie, bienvenue sur mon portfolio !");
  message.lang = "fr-FR";  // Utiliser la langue française
  message.volume = 1;      // Volume à 100%
  message.rate = 1;        // Vitesse normale
  message.pitch = 1;       // Tonalité normale

  // Démarrer la synthèse vocale
  window.speechSynthesis.speak(message);
});


function addResponse() {
  // Get the user's input
  const userMessage = document.getElementById('user-message').value;
  
  if (userMessage.trim() !== '') {
      // Create a new paragraph for the user's response
      const userResponse = document.createElement('p');
      userResponse.innerHTML = `<strong>You:</strong> ${userMessage}`;

      // Append the user's response to the conversation
      const conversation = document.querySelector('.speech-bubble');
      conversation.appendChild(userResponse);

      // Clear the input field
      document.getElementById('user-message').value = '';
  }
}