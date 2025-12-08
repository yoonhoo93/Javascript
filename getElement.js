/* 
    1. getElementById 메서드 사용
    HTML 태그의 id 속성의 값을 사용해서 문서 객체를 선택하는 방법입니다. 
*/

let el = document.getElementById("id 속성의 값");

/* 
    2. getElementsByClassName 메서드 사용
    class 속성의 값으로 문서 객체를 선택하는 방법입니다. 
    복수 개가 선택이 되며 이로인해 HTMLCollection 객체 형태로 값이 반환됩니다. 
*/

let els = document.getElementsByClassName("class 속성의 값");

/* 
    3. getElementsByTagName 메서드 사용
    HTML 태그 이름으로 문서 객체를 선택하는 방법입니다.
    마찬가지로 복수 개가 선택이 되며 이로 인해서 HTMLCollection 객체 형태로 값이 반환됩니다. 
*/

let els = document.getElementsByTagName("HTML 태그명");

/* 
    getQuyerSelector~ 메서드를 사용하는 방법
    getElement~ 관련 메서드는 내가 매개변수로 사용하려는 값에 따라서 메서드의 종류를 선택해야 합니다.
    하지만 querySelector 관련 메서드를 사용하면 어떤 값이라도 상관없이 CSS 선택자처럼 모두 선택할 수 있습니다. 
*/

/* 
    1. 단일 문서 객체 선택하기
    querySelector 메서드를 사용하면 단일 문서 객체를 선택할 수 있습니다.
*/

let el = document.querySelector("css 선택자");

/*
    2. 복수 문서 객체 선택하기
    querySelectorAll 메서드를 사용하면 복수 문서 객체를 선택할 수 있습니다.
*/

let els = document.querySelectorAll("css 선택자");
