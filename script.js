const toggle = document.getElementById("themeToggle");

// DARK MODE SWITCH
toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark");
});

// SKILLS
function showSkill(skill) {
    document.getElementById("skillInfo").innerText = skill;
}

// FORM
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (email === "" || message === "") {
        document.getElementById("formMsg").innerText = "Fill all fields!";
        return;
    }

    if (!email.includes("@")) {
        document.getElementById("formMsg").innerText = "Invalid email!";
        return;
    }

    document.getElementById("formMsg").innerText = "Message sent!";
});