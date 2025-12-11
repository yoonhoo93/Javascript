function date() {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

    let newDate = `${hour} : ${min} : ${second}`;

    let timeTag = document.querySelector(".date");

    timeTag.textContent = newDate;
}

window.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        date();
    }, 100);
});

function onclick1() {
    let acs = document.querySelector(".desc");
    acs.classList.add("test");
}

function onImg() {
    let img = document.querySelector(".img");
    img.classList.toggle("on");
    if (img.classList.contains("on")) {
        img.setAttribute("src", "https://placehold.co/500x500");
    } else {
        img.setAttribute("src", "https://placehold.co/300x300");
    }
}
