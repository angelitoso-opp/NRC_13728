document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".top-header");
  const toggle = document.querySelector(".menu-toggle");
  const parentLinks = document.querySelectorAll(".has-children > .parent-link");

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", String(!expanded));
      header.classList.toggle("active");
    });
  }

  // Toggle submenus on click (útil en móvil / pantallas táctiles)
  parentLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width: 768px)").matches) {
        e.preventDefault();
        const li = this.parentElement;
        if (li) li.classList.toggle("open");
      }
    });
  });

  // limpiar estados al redimensionar a escritorio
  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 769px)").matches) {
      if (header) header.classList.remove("active");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
      document.querySelectorAll(".has-children.open").forEach((el) => el.classList.remove("open"));
    }
  });
});

