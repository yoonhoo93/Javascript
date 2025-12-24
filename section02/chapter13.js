/* 
    async 란 
     - 어떤함수를 비동기 함수로 만들어주는 키워드
     - 함수가 프로미스를 반환하도록 변환해주는 키워드
*/

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "조윤후",
                id: "yoonhoo93",
            });
        }, 1000);
    });
}

console.log(getData());

/* 
    await
     - async함수 내부에서만 사용가능 한 함수
     - 비동기 함수가 다 처리되기를 기다리는함수
*/

async function printData() {
    const data = await getData();
    console.log(data);
}

printData();
