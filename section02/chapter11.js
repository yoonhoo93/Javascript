/* 동기와 비동기 */

/* console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 1000);
console.log(4); */

/* 비동기 */
function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 3000);
}
/* 콜백함수는 사용하면 비동기 호출된함수에 값을 사용할수있다. */
add(1, 2, (value) => {
    console.log(value);
});

/* 음식을 주문하는 상황 */
function orderFood(callback) {
    setTimeout(() => {
        const food = "피자";
        callback(food);
    }, 3000);
}

function coolDownFood(food, callback) {
    setTimeout(() => {
        const coolDowndFood = `식은 ${food}`;
        callback(coolDowndFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `얼은 ${food}`;
        callback(freezedFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    coolDownFood(food, (coolDowndFood) => {
        console.log(coolDowndFood);

        freezeFood(coolDowndFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});
