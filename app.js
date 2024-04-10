// Ajoutez cette fonction dans votre app.js
function checkPassword() {
    var passwordInput = document.getElementById("passwordInput").value;
    var correctPassword = "0510";

    if (passwordInput === correctPassword) {
        console.log("Mot de passe correct. Redirection en cours...");
        document.getElementById("passwordMessage").textContent = "Mot de passe correct. Redirection en cours...";
        // Redirigez l'utilisateur vers la page principale ou déverrouillez le contenu ici
        setTimeout(function() {
            console.log("Redirection vers index.html");
            window.location.href = "index.html"; // Redirigez vers la page principale
        }, 2000); // Redirige après 2 secondes (2000 millisecondes)
    } else {
        console.log("Mot de passe incorrect");
        document.getElementById("passwordMessage").textContent = "Mot de passe incorrect. Veuillez réessayer.";
    }
}

// Ajoutez cette fonction pour gérer le menu burger
function toggleMenu() {
    var navMenu = document.querySelector('nav');
    navMenu.classList.toggle('show');
}
