const modalOverlay = document.querySelector(".modal-overlay");
const courses = document.querySelectorAll(".Course");

for (let course of courses) {
    course.addEventListener("click",function() {
        modalOverlay.classList.add("maximize");
        modalOverlay.querySelector("iframe").src = "https://rocketseat.com.br/starter";
    })
}