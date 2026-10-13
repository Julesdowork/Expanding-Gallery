const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panels.forEach((child) => child.classList.remove("active"));

    panel.classList.add("active");
  });
});
