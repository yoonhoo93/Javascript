/* let a = 10; */
let b = 20;

a += 1;

console.log(a);

const res = 10 < 20 && 10 == 10;
console.log(res);

const res2 = true && 0 && 10 < 20;
console.log(res2);

const BMI = 65 / (1.72 * 1.72);

console.log(BMI);

const tall = 172 / 10;
const kg = 65;

const c = kg / (tall * tall);

console.log(c);

let score = "30";

if (score >= 90) {
    console.log(`A학점입니다.`);
} else if (score >= 80 && score < 90) {
    console.log("B학점");
} else if (score >= 70 && score < 80) {
    console.log("C학점");
} else if (score >= 60 && score < 70) {
    console.log("D학점");
} else {
    console.log("낙점");
}

switch (score) {
    case "1":
        console.log("a");
        break;
    case "2":
        console.log("b");
        break;
    case "30":
        console.log("c");
        break;
    case "20":
        console.log("d");
        break;
    default:
        console.log("test");
}

let num = 1;

while (num < 10) {
    console.log(num);
    num++;
}

/* for (let i = 2; i <= 9; i++) {
    console.log(`${i}단 입니다.`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i + "x" + j}= ${i * j}`);
    }
} */

const arr = [10, 20, 30];
const tasks = {
    name: "철수",
    age: 20,
};

for (let task in tasks) {
    console.log(tasks[task]);
}

for (let task of tasks) {
    console.log(tasks[task]);
}

function sum(num1, ...args) {
    console.log(num1);
    console.log(args);
    return args;
}

sum(10, 20, 30);

function ex2(num) {
    return num * num;
}

console.log(ex2(5));

const a = 10;
function sum(b) {
    return a + b;
}
console.log(sum(5)); // 출력 값은 ? -> 15

function multiple(c) {
    return sum(5) * c;
}
console.log(multiple(4)); // 출력 값은 ? -> 60

function division(d) {
    const a = 4;
    function inner(e) {
        return a / e;
    }
    return inner(d);
}
console.log(division(2)); // 출력 값은? -> 2
