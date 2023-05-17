const panels = document.querySelectorAll(".faq__panel");
const panelLabels = document.querySelectorAll(".faq__label");
panels.forEach((panel, index) => {
  let isExpanded = panel.getAttribute("aria-expanded") === "true";

  panelLabels[index].addEventListener("click", () => {
    console.log("clicked");
    isExpanded = !isExpanded;
    panel.setAttribute("aria-expanded", isExpanded);
  });
});
