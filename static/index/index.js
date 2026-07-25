const accordionItems = document.querySelectorAll(".accordion-item");
const collapses = document.querySelectorAll(".accordion-collapse");

collapses.forEach(collapse => {

    collapse.addEventListener("show.bs.collapse", function () {

        accordionItems.forEach(item => {
            item.classList.add("transparente");
        });

        this.closest(".accordion-item").classList.remove("transparente");

    });

    collapse.addEventListener("hide.bs.collapse", function () {

        accordionItems.forEach(item => {
            item.classList.remove("transparente");
        });

    });

});