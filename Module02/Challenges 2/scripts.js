const modalOverlay = document.querySelector(".modal-overlay");
const courses = document.querySelectorAll(".Course");
const modal = document.querySelector(".modal");

for (let course of courses) {
    course.addEventListener("click",function() {
        modalOverlay.classList.add("active");
        const courseClick = course.querySelector("span").getAttribute("id");
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseClick}`;
    })
}

document.querySelector(".maximize-modal").addEventListener("click",function() {
    if (modal.classList.contains("maximize")) {
        return modal.classList.remove("maximize");
    } 
    
    return modal.classList.add("maximize");
    
})

document.querySelector(".close-modal").addEventListener("click",function() {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";
})