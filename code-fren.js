const content = {
    fr: {
        presentations: {
            title: "Présentation",
            text1: "Bonjour, je m'appelle Laurie. Je suis frontend developer junior. J'ai appris le développement web à travers un programme de trois mois chez Bruxelles Formation et un programme d'un an chez Interface3. Je parle français et un peu anglais.",
            text2: "Je joue du violon et du violoncelle. Le violon depuis 20 ans et le violoncelle depuis 3 ans."
        },
        projects: {
            title: "Mes Projets",
            project1: "https://christmas-planners.netlify.app/",
            project2: "Violoncelle"
        },
        contacts: {
            title: "Contactez-moi",
            emailLabel: "Email :",
            messageLabel: "Message :",
            placeholderEmail: "jean@gmail.com",
            placeholderMessage: "Votre message",
            button: "Envoyer"
        }
    },
    en: {
        presentations: {
            title: "Presentation",
            text1: "Hello, my name is Laurie. I am a frontend developer junior. I have been learning web development through a three-month program at Bruxelles Formation and a one-year program at Interface3. I speak French and little English.",
            text2: "I play the violin and cello. The violin since 20 years and the cello since 3 years."
        },
        projects: {
            title: "My Projects",
            project1: "https://christmas-planners.netlify.app/",
            project2: "Cello"
        },
        contacts: {
            title: "Contact Me",
            emailLabel: "Email:",
            messageLabel: "Message:",
            placeholderEmail: "john@gmail.com",
            placeholderMessage: "Your message",
            button: "Send"
        }
    }
};

function setLanguage(lang) {
    document.querySelector("#presentations h2").innerText = content[lang].presentations.title;
    document.querySelector("#presentations p:nth-child(2)").innerText = content[lang].presentations.text1;
    document.querySelector("#presentations p:nth-child(3)").innerText = content[lang].presentations.text2;

    document.querySelector("#projects h2").innerText = content[lang].projects.title;
    const projectLinks = document.querySelectorAll("#projects ul li");
    projectLinks[0].innerHTML = `${content[lang].projects.project1} (React): <a href="https://laurieswr.github.io/accueil">${content[lang].projects.project1}</a>`;
    projectLinks[1].innerHTML = `${content[lang].projects.project2}: <a href="https://hackathon24.interface3.be/techortrees/">${content[lang].projects.project2}</a>`;

    document.querySelector("#contacts h2").innerText = content[lang].contacts.title;
    document.querySelector("label[for='email']").innerText = content[lang].contacts.emailLabel;
    document.querySelector("label[for='message']").innerText = content[lang].contacts.messageLabel;
    document.querySelector("#email").placeholder = content[lang].contacts.placeholderEmail;
    document.querySelector("#message").placeholder = content[lang].contacts.placeholderMessage;
    document.querySelector(".btn").innerText = content[lang].contacts.button;
}