const modalOvarlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click",function(){
        const videoId = card.getAttribute("id");
        modalOvarlay.classList.add("active");
        modalOvarlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOvarlay.classList.remove("active");
    modalOvarlay.querySelector("iframe").src = "";
})


