/* 콜백지옥해결하기 promise */
const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
        const num = "10";

        if (typeof num === "number") {
            resolve(num + 10);
        } else {
            reject("실패 num이 숫자가 아닙니다.");
        }
    }, 2000);
});

// promise의 결과값 사용하기

// then을 사용하면 resolve에 있는 결과값을 then 매개변수로 전달해준다.
promise
    .then((value) => {
        console.log(value);
    })
    // 실패값
    .catch((error) => {
        console.log(error);
    });

function add10(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = number + 10;
            if (typeof number === "number") {
                resolve(num);
            } else {
                reject("숫자가 아닙니다.");
            }
        }, 1000);
    });
}

add10("20")
    .then((num) => {
        console.log(num);
        return add10(num);
    })
    .then((num) => {
        console.log(num);
    })
    .catch((error) => {
        console.log(error);
    });
