document.addEventListener("DOMContentLoaded", () => {
    function uppdateraPortioner() {
        portionerSpan.textContent = portioner;
        antalTaggar.forEach((element) => {
            const bas = parseFloat(element.getAttribute("data-bas"));
            element.textContent = bas * portioner;
        });
    }

    const minusKnapp = document.querySelector(".minus");
    const plusKnapp = document.querySelector(".plus");
    const portionerSpan = document.querySelector(".portioner");
    const antalTaggar = document.querySelectorAll(".antal");

    let portioner = 1;

    minusKnapp.addEventListener("click", () => {
        if (portioner > 1) {
            portioner--;
            uppdateraPortioner();
        }
    });

    plusKnapp.addEventListener("click", () => {
        portioner++;
        uppdateraPortioner();
    });
});
