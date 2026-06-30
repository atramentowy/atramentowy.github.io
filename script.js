const navbar = document.querySelector(".navbar");

document.addEventListener("mousemove", (e) => {
    const elements = document.querySelectorAll(".navbar, .project");

    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty("--x", x + "px");
        el.style.setProperty("--y", y + "px");
    });
});