// 배열 변형 메서드

/* 
    1. filter
     - 기존배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
*/

let arr = [
    { name: "조윤후", hobby: "테니스" },
    { name: "백진주", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },
];

const tanisPeople = arr.filter((item) => item.hobby === "테니스");

console.log(tanisPeople);

/* 
    2. map
     - 배열의 모든요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환한다.
*/

let test = arr.map((item) => {
    return item.hobby;
});

console.log(test);

/* 
    3. sort()
     - 배열을 사전순으로 정렬하는 메서드
     - 숫자의 대소비교를 하지않고, 그렇게 하고싶다면 콜백함수를 사용하여 
*/

let arr2 = [5, 2, 6, "b", "c", "a"];
console.log(arr2.sort());
let sorts = arr2.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});

console.log(sorts);

/* 
    4. toSorted
     - 원본배열은 건드리지않고 정렬된 새로운 배열을 반환하다.
*/

const sorted = arr2.toSorted();

/* 
    5. join()
     - 배열의 모든요소를 하나의 문자열로 합쳐 반환
     - join 인수안에 바꾸고 싶은 문자열로 바꿀수있다.
*/

let txt = arr2.join(" ");
console.log(txt);
