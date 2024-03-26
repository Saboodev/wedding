<script>
    (function () {
        document.querySelectorAll(".nav").forEach(button => {
            button.addEventListener("click", function () {
                document.querySelector(".active-btn").classList.remove("active-btn");
                this.classList.add("active-btn");
                document.querySelector(".active").classList.remove("active");
                document.getElementById(button.dataset.id).classList.add("active");
            });
        });

        document.querySelectorAll(".cta").forEach(button => {
            button.addEventListener("click", function () {
                document.querySelector(".active-btn").classList.remove("active-btn");
                this.classList.add("active-btn");
                document.querySelector(".active").classList.remove("active");
                document.getElementById(button.dataset.id).classList.add("active");
            });
        });
    })();
</script>
