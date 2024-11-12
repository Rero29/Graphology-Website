function loadHTML(elementId, filePath, callback) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) callback(); // Execute callback
    })
    .catch((error) => console.error("Error "));
}

loadHTML(
  "navbar-placeholder",
  "../components/navbar.html",
  initializeMenuToggle,
);
loadHTML("footer-placeholder", "../components/footer.html");

function initializeMenuToggle() {
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("menu");

  if (btn && nav) {
    // Ensure elements are found
    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
      nav.classList.toggle("show");

      if (nav.classList.contains("show")) {
        nav.style.height = "100vh";
      } else {
        nav.style.height = "0";
      }
    });
  } else {
    console.error("Menu button or menu not found in navbar.");
  }
}
