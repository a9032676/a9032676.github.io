const toggleBtn = document.querySelector('#color-toggle');
const toggleBtnIcon = document.querySelector('#color-toggle > i');

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)");

const rootStyle = document.styleSheets[2].cssRules[0].style;
const textPrimaryColor = rootStyle.getPropertyValue('--text-primary-color');
const darkTextPrimaryColor = rootStyle.getPropertyValue('--dark-text-primary-color');

function toggleDarkTheme() {
    toggleXypicTheme(true);
    toggleBtnIcon.classList.remove('ri-moon-line');
    toggleBtnIcon.classList.add('ri-sun-line');
    document.body.classList.add('dark-mode');
    currentTheme = "dark";
    localStorage.setItem("theme", "dark");
}
function toggleLightTheme() {
    toggleXypicTheme(false);
    toggleBtnIcon.classList.remove('ri-sun-line');
    toggleBtnIcon.classList.add('ri-moon-line');
    document.body.classList.remove('dark-mode');
    currentTheme = "light";
    localStorage.setItem("theme", "light");
}

function toggleXypicTheme(isDark) {
    const xypicObjs = document.getElementsByTagName('mjx-xypic-object');
    const svg_g = document.getElementsByTagName('g');
    const color = isDark ? darkTextPrimaryColor : textPrimaryColor;
    for (let i = 0; i < xypicObjs.length; i++) {
        let element = xypicObjs[i];
        element.style.color = color;
    }
    for (let i = 0; i < svg_g.length; i++) {
        let element = svg_g[i];
        if (element.hasAttribute('stroke'))
            element.setAttribute('stroke', color);
    }
}

let currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    toggleDarkTheme();
} else if (currentTheme == null) {
    if (prefersDark.matches) {
        toggleDarkTheme();
        currentTheme = "dark";
        localStorage.setItem("theme", "dark");
    } else {
        currentTheme = "light";
        localStorage.setItem("theme", "light");

    }
}

toggleBtn.addEventListener('click', e => {
    e.preventDefault();
    if (currentTheme == "light") {
        toggleDarkTheme();
    } else {
        toggleLightTheme();
    }
});

prefersDark.addEventListener("change", e => {
    if (e.matches) toggleDarkTheme();
});

prefersLight.addEventListener("change", e => {
    if (e.matches) toggleLightTheme();
});