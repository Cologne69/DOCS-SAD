

/* set data-bs-theme on html tag to light when checkbox dark-mode is toggled*/
const theme = document.getElementById("dark-mode");
theme.addEventListener("change", () => {
    if (theme.checked) {
        document.documentElement.setAttribute("data-bs-theme", "light");

    } else {
        document.documentElement.setAttribute("data-bs-theme", "dark");

    }
});

/*change far-fa sun into far fa-moon */

theme.addEventListener("change", () => {
    if (theme.checked) {
        document.getElementById("dark-mode-icon").classList.remove("fa-moon");
        document.getElementById("dark-mode-icon").classList.add("fa-sun");
    } else {
        document.getElementById("dark-mode-icon").classList.remove("fa-sun");
        document.getElementById("dark-mode-icon").classList.add("fa-moon");
    }
});
/* change Header background color to --bs-dark and color to --bs-light */
// theme.addEventListener("change", () => {
//     if (theme.checked) {
//         document.getElementById("header").style.backgroundColor = "var(--bs-dark)";
//         document.getElementById("header").style.color = "var(--bs-light)";
//     } else {
//         document.getElementById("header").style.backgroundColor = "var(--bs-light)";
//         document.getElementById("header").style.color = "var(--bs-dark)";
//     }
// });

