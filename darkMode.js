let darkMode = document.querySelector(".mode");
let body = document.querySelector("body");

darkMode.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
    }
});

dark;

/* 다크를 가지고 있으면 다크를 지우고 라이트를 넣는다.
라이트 상태에서 누르면 라이트 지우고 다크를 넣는다. */
