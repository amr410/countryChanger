let btns = document.querySelectorAll(".btn");
let sections = document.querySelectorAll(".section");
let _remove = document.querySelector(".remove");

console.log(sections);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    hide();
    sections.forEach((section) => {
      if (btn.innerText == section.dataset.country) {
        section.classList.remove("d-none");
      }
    });
  });
});
_remove.addEventListener("click", () => {
  hide();
});

function hide() {
  sections.forEach((section) => {
    section.classList.add("d-none");
  });
}
