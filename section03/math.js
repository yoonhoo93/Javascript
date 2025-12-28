/* math 모듈 */
function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

/* common JS 모듈 방식
module.exports = {
    plus: add,
    sub: minus,
}; */

/* Es모듈시스템 */
export { add, minus };

export default function multiply(a, b) {
    return a * b;
}
