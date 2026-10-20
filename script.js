document.documentElement.classList.add("js");
// Build the nav from every <section data-nav="Label">. Add a section and its link appears automatically.
const nav = document.getElementById("nav");
document.querySelectorAll("section[data-nav]").forEach((s) => {
  const a = document.createElement("a");
  a.href = "#" + s.id;
  a.textContent = s.dataset.nav;
  nav.appendChild(a);
});
const contact = document.createElement("a");
contact.href = "#contact";
contact.textContent = "Contact";
nav.appendChild(contact);

// Mobile menu
const btn = document.querySelector(".menu-btn");
btn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", () => {
  nav.classList.remove("open");
  btn.setAttribute("aria-expanded", false);
});

document.getElementById("year").textContent = new Date().getFullYear();

// Gentle reveal: each section's content fades up once as it scrolls into view
const targets = document.querySelectorAll(".section > .wrap");
targets.forEach((t) => t.classList.add("reveal"));
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  targets.forEach((t) => io.observe(t));
} else {
  targets.forEach((t) => t.classList.add("in"));
}
