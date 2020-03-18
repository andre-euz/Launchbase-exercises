const courses = document.querySelectorAll(".Course");


for (let course of courses) {
    course.addEventListener("click",function() {
        const courseClick = course.querySelector("span").getAttribute("id");
        window.location.href = `courses?id=${courseClick}`;
    })
}

