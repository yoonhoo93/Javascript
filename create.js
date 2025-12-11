(function () {
    /* 생성 */
    let body = document.querySelector("body");

    let el = document.createElement("a");
    let textNode = document.createTextNode("구글바로가기");
    el.appendChild(textNode);
    el.setAttribute("href", "http://google.com");

    body.appendChild(el);

    /* 삭제 */
    let removeBox = document.querySelector("h2");
    console.log(removeBox);
    removeBox.remove();

    let box2 = document.querySelector(".box-2");
    box2.appendChild(removeBox);
})();
