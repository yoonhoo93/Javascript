/* let a = 10; */
let b = 20;

/* a += 1; */

/* console.log(a); */

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

function A2() {
    console.log("A환경");
}
function B2(callback, callback2) {
    setTimeout(() => {
        console.log("B환경");
        callback();
        callback2();
    }, 0);
}
function C2() {
    console.log("C환경");
}
function D2() {
    console.log("D환경");
}

A2();
B2(C2, D2);
console.log("after");

function count(n, callback) {
    setTimeout(() => {
        let sum = n + 1;
        console.log(sum);
        if (callback) {
            callback(sum);
        }
    }, 0);
}

count(0, (n) => {
    count(n, function (n) {
        count(n);
    });
});

new Promise(function (resolve, reject) {
    // 비동기 로직
    // 1. 대기(pending) : promise코드가 본격적으로 시작되기 전 상태
    console.log("시작함");
    // 2. 이행(fulfilled) :
    resolve(1);
    // 3. 거절(rejected) : resolve가 있으면 실행안됨
    /* reject(new Error("데이터를 불러오지 못했습니다.")); */
})
    .then((res) => {
        //resolve에서 매개변수를 받을수 있다.
        return res * 3;
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        //reject 에서 매개변수 받을수있따.
        console.log(err);
    });

function counter(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sum = n + 1;
            console.log(sum);
            if (n > 5) {
                reject(new Error("5보다 클수 없습니다."));
            } else {
                resolve(sum);
            }
        });
    });
}

counter(0)
    .then((a) => counter(a))
    .then((a) => counter(a));

function delay(ms) {
    /* return new Promise((reslove, reject) => setTimeout(reslove, ms)); 성공 */
    return new Promise((reslove, reject) => setTimeout(reject(new Error("에러입니다~")), ms)); /* 실패 */
}

function getBike() {
    return new Promise((resolve) => resolve("오토바이"));
}

async function getBicycle() {
    try {
        await delay(2000);
        return "자전거";
    } catch (error) {
        /* async크 await 에러가 발생했을 경우 언디파인드가 찍힐수있기때문에 에러쪽에선 throw 키워드를 사용하여 에러를 던진다. */
        throw error;
    }
}

getBike().then(console.log);
getBicycle()
    .then(console.log)
    /* 에러가 발생할수 있기 때문에 catch 까지 한번에 적용해준다. */
    .catch((error) => console.log(error));

const person = {
    name: "철수",
    age: 20,
};

console.log("name" in person); //key 가 존재하는지 확인하는법
with (person) {
    console.log(name);
    console.log(age);
}

/* 생성자 함수를 생성할땐 첫글자는 대문자로 생성 */
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("짱구", 30);
console.log(person1.age);

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
        return `Hello, My Name is ${this.name}, im ${this.age} years old.`;
    };
}

const person2 = new Person("yoonhoo", 23);

console.log(person2.introduce());

let string2 = "admin";

console.log(string2.toUpperCase());

function validUpperCase(value) {
    if (value.length > 8) {
        value = value.substr(0, 7);
    }

    console.log(test.toUpperCase());
}

validUpperCase("admin");
validUpperCase("hi hello nice to meet you");
validUpperCase("my name is yoonhoo");

let num1 = 10;
let num2 = 12.345;
/* 
    1. 매개변수를 넣지않으면 소수점을 제외하고 표현
    2. toFixed 안에 매개변수로 숫자를 넣으면 그만큼 소수점을 표현한다.
    3. 숫자 2를 넣었다 가정했을때 소수점 3자리에서 반올림 여부를 판단 후 2번째 자리까지 표현
 */
console.log(num1.toFixed());
console.log(num2.toFixed());

function validInteger(value) {
    if (Number.isInteger(value)) {
        return value;
    } else {
        return 0;
    }
}

let res1 = validInteger(10.11);
console.log(typeof res1);
let res2 = validInteger(10);
console.log(typeof res2);

function loTToCard() {
    var lotto = [];
    while (lotto.length < 6) {
        var num = parseInt(Math.random() * 45 + 1);
        if (lotto.indexOf(num) == -1) {
            lotto.push(num);
        }
    }
    lotto.sort((a, b) => a - b);
}

let test112 = loTToCard();
console.log(test112);

console.log(parseInt(Math.random() * 45 + 1));

function popup() {
    open("http://naver.com", "네이버", "width=500, height=300");
}
