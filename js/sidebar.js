const menuIconButton = document.querySelector("#menu-icon-button");
const sidebar = document.querySelector("#sidebar-container");
const main = document.querySelector("#doc-content");
const closeButton = document.querySelector("#close-btn");

menuIconButton.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});
closeButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

window.addEventListener("click", event => {
  if (
    (event.target === this.document.body || event.target === main) &&
    this.innerWidth < 800
  ) {
    sidebar.classList.remove("show-sidebar");
  }
});