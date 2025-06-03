const websiteList = document.getElementById("websites")


function loadWebsites() {
    const websites = {
        "Square Root": "https://monkeee-cs.github.io/squareRoot/",
        "VST Formulas": "https://monkeee-cs.github.io/vst_forumla/",
        "dbu-calculator": "https://github.com/Monkeee-code/dbu-calculator",
        "dbu-calcualtor-discord": "https://github.com/Monkeee-code/dbu-calculator-discord",
        "Counter": "https://github.com/Monkeee-Cs/counter",
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