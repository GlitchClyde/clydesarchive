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
