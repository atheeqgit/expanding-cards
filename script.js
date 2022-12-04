const panels = document.querySelectorAll(".panel");
const container = document.querySelector(".container");

panels.forEach((panel) => {
    
  panel.addEventListener("click", () => {
    // removeActiveClasses();
    panel.classList.toggle("active");
  });
});

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     if (panel.classList == "panel active") {
//       panel.classList.remove("active");
//     }
//   });
// }
