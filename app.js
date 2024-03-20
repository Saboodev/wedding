(function () {
    [...document.querySelectorAll(".nav")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    [...document.querySelectorAll(".cta")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    })
})();

const activeBtn = document.querySelector(".active-btn");
if (activeBtn) {
    activeBtn.classList.remove("active-btn");
}


// utilisation du middleware

const express = require('express');
const basicAuth = require('./middlewares/basicAuth');
const config = require('./config');

const app = express();
const port = 3000;

// Route protégée
app.get('/protected', basicAuth, (req, res) => {
    res.send('Content protected by password');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
