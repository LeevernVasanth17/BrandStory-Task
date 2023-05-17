function navActive() {
  const name = document.querySelector(".nav-item");
  name.style.color;
}

window.onload = () => {
  addNavigateEvents();
};

function addNavigateEvents() {
  const navItems = document.querySelectorAll(".navbar-nav .nav-item");

  navItems.forEach((node) => {
    node.onclick = () => {
      navItems.forEach((node) => node.classList.remove("active"));
      node.classList.add("active");
    };
  });
}
