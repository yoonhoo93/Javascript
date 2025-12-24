// 1. Date 객체
let date = new Date();
let date2 = new Date("1993/02/08/10:10:10");

/* 
    2. 타임스탬프 
     - 특정시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms 가 지났는지 의미하는 숫자값
*/
let ts1 = date2.getTime();
console.log(ts1 * 10000);

/* 
    3. 시간요소 추출 
     - 자바스크립트에 월은 0부터 시작한다. 그래서 + 1한다.
*/

let year = date.getFullYear();
let month = date.getMonth() + 1;
let date1 = date.getDate();

/* 
    4. 시간 수정 
*/
date.setFullYear(2023);

/* 
    5. 시간을 여러 포맷으로 출력하기
*/
console.log(date.toDateString()); // 영문
console.log(date.toLocaleString()); //한글
