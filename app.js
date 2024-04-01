// Encapsulez votre code dans une fonction auto-exécutante
(function() {
    document.querySelectorAll(".li-content").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });
})();

// Ajoutez cette fonction dans votre app.js
function checkPassword() {
    var passwordInput = document.getElementById("passwordInput").value;
    var correctPassword = "0510";

    if (passwordInput === correctPassword) {
        document.getElementById("passwordMessage").textContent = "Mot de passe correct. Redirection en cours...";
        // Redirigez l'utilisateur vers la page principale ou déverrouillez le contenu ici
        setTimeout(function() {
            window.location.href = "index.html"; // Redirigez vers la page principale
        }, 2000); // Redirige après 2 secondes (2000 millisecondes)
    } else {
        document.getElementById("passwordMessage").textContent = "Mot de passe incorrect. Veuillez réessayer.";
    }
}


// Ajoutez cette fonction pour gérer le menu burger
function toggleMenu() {
    var navMenu = document.querySelector('nav');
    navMenu.classList.toggle('show');
}
