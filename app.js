const websiteList = document.getElementById("websites")


function loadWebsites() {
    const websites = {
        "Square Root": "https://monkeee-cs.github.io/squareRoot/",
        "VST Formulas": "https://monkeee-cs.github.io/vst_forumla/",
        "dbu-calculator": "https://monkeee-code.github.io/dbu-calculator/",
        "dbu-calcualtor-discord": "https://github.com/Monkeee-code/dbu-calculator-discord",
        "Counter": "https://monkeee-cs.github.io/counter/",
    }

    
    for (const website in websites) {
        const site = document.createElement("a");
        site.href = websites[website]
        site.target = "_blank"
        site.id = "link"
        site.text = website
        websiteList.appendChild(site);
        websiteList.appendChild(document.createElement("br"));
    }
}

document.addEventListener("DOMContentLoaded", loadWebsites());

const lightMode = document.querySelector(".themeMode-light");
const darkMode = document.querySelector(".themeMode-dark");

darkMode.style.display = "none";

let currentTheme = "dark"

document.addEventListener("click", (e) => {
   if (e.target == lightMode || e.target == darkMode) {
    if (currentTheme == "dark") {
        currentTheme = "light";
        lightTheme();
        darkMode.style.display = "flex";
        lightMode.style.display = "none";
    } else if (currentTheme == "light") {
        currentTheme = "dark";
        darkTheme();
        darkMode.style.display = "none";
        lightMode.style.display = "flex";
    } else {
        window.location.reload();
    }
   }
})

const footer = document.querySelector(".footer");
const footer_container = document.querySelector(".footer-container");
const title = document.querySelector("#title");
const body = document.querySelector("body");
const link = document.querySelectorAll("#link");

function lightTheme() {    
    body.style.color = "rgb(150, 150, 150)";
    body.style.backgroundColor = "white"

    title.style.border = "2px black solid"
    
    link.forEach((l) => {
        l.style.color = "rgb(150, 150, 150)";
    });
    
    footer.style.color = "rgb(150, 150, 150)";
    footer.style.backgroundColor = "rgb(200, 200, 200)";
}

function darkTheme() {
    body.style.color = "white";
    body.style.backgroundColor = "rgb(45, 45, 45)"
    
    title.style.border = "2px white solid"
    
    link.forEach((l) => {
        l.style.color = "white";
    });
    
    footer.style.color = "white";
    footer.style.backgroundColor = "black";
}