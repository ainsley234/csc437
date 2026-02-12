
// Create the banner
const banner = document.createElement("div");
banner.className = "banner";

const title = document.createElement("h1");
title.textContent = "Ainsley F";
banner.appendChild(title);


const nav = document.createElement("nav");
nav.className = "hidden";


const a1 = document.createElement("a");
a1.href = "index.html";
a1.textContent = "Home";

const a2 = document.createElement("a");
a2.href = "dance.html";
a2.textContent = "Dance";

nav.appendChild(a1);
nav.appendChild(a2);
banner.appendChild(nav);


const label = document.createElement("label");
label.className = "dark";

const input = document.createElement("input");
input.type = "checkbox";
input.autocomplete = "off";


label.appendChild(input);
label.append(" Dark mode");
banner.appendChild(label);


const btn = document.createElement("button");
btn.textContent = "Menu";
banner.appendChild(btn);

document.body.prepend(banner);



// Menu open and close
btn.addEventListener("click", () => {
  nav.className = "";
});

document.addEventListener("click", (myClick) => {
  if (!banner.contains(myClick.target)) {nav.className = "hidden";}
});



// Dark mode toggle on and off
if (! localStorage.getItem("mode")) {
    localStorage.setItem("mode", "light");
};

if (localStorage.getItem("mode") ===  "dark") {
    document.body.className = "dark-mode";
    input.checked = true;
};

input.addEventListener ("change", ()  => {
    if (input.checked) {
        localStorage.setItem("mode", "dark");
        document.body.className = "dark-mode";
    } else {
        localStorage.setItem("mode", "light");
        document.body.className = "";
    }
});


// Form submission

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  const emailValid = validateEmail()
  const boxesValid = validateCheckbox()

  if (!emailValid || !boxesValid) { e.preventDefault() }
});

function validateEmail() {
    const email = document.getElementById("inputEmail")
    const emailError = document.getElementById("emailError")

    if (email.value.trim() === "" || !email.checkValidity()) {
        email.setAttribute("aria-invalid", "true")
        emailError.textContent = "Requires a valid email address."
        return false
    }
    return true
}

function validateCheckbox() {
    const boxes = document.getElementsByName("danceStyle")
    const checkboxError = document.getElementById("checkboxError")

    let oneChecked = false
    for (const box of boxes) {
        if (box.checked) {
           oneChecked = true
           break
        }
    }

    if (!oneChecked) {
        checkboxError.textContent = "Requires at least one choice to be selected."
        return false
    } else {
        return true
    }
}




