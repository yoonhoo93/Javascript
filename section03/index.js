/* common JS 모듈시스템은 확장자 필요없다.

const moduleData = require("./math"); 변수방식
const { plus, sub } = require("./math"); // 구조분해할당
console.log("hello node JS");

console.log(moduleData.plus(1, 2));
console.log(moduleData.sub(1, 2));
console.log(plus(1, 2));
console.log(sub(1, 2)); */

/* // Es 모듈 시스템은 확장자 필요
import { add, minus } from "./math.js";
import multi from "./math.js";

console.log(add(1, 2));
console.log(minus(1, 2));
console.log(multi(2, 3)); */

/* import 해서 가지고온 라이브러리는 브라우저가 인식하지못해 사용불가 CDN 사용 */
import randomColor from "randomcolor";

let color = randomColor({
    count: 10,
    hue: "black",
});
console.log(color);

let body = document.querySelector("body");
for (const colors of color) {
    let div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.marginBottom = "5px";
    div.style.backgroundColor = colors;
    body.appendChild(div);
}
