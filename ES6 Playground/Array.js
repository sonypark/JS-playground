
// 1. ES6 for of - 사용하기
// 배열에서 for in 을 쓰면 안 된다!
// 자기자신 이외의 객체도 호출한다.
// prototype에 의해 추가된 상위 객체값 까지 호출한다.

var data = [1,2,undefined,NaN,null,''];

Array.prototype.getIndex = function () {};

// 자기 자신 이외의 객체도 호출함 (안 좋은 방법)
for(let idx in data){
    console.log(data[idx])
};

// 자기 자신의 객체만 호출함 (이렇게 써야함)
for(let value of data){
    console.log(value)
};

// 2. ES6 spread operator (펼침 연산자) - 배열의 복사
let pre = ["apple", "orange", 100];
let newData = [...pre]; // newData =  ["apple", "orange", 100] 이거랑 같다.
console.log(newData);

// spread operator (펼침 연산자) - 몇 가지 활용
let pre1 = [200, 'hello', "apple", "orange", 100];
let newData1 = [0,1,2,3, ...pre1, 4]; // 중간에 삽입도 가능
console.log(newData1);

// 함수의 인자값(parameters)을 받을 때 이용
function sum(a,b,c) {
    return a+b+c
}
let pre2 = [100,200,300];

console.log(sum.apply(null, pre2)); // 방법 1. apply 이용
console.log(sum(...pre2)); // 방법 2 -- 이런식으로 굉장히 많이 씀 (ES6 문법)

// ES6 from method
function addMark() { // 방법 1: for 문 사용 (기존 방법)
    let newData = [];
    for(let i=0; i<arguments.length; i++){
        newData.push(arguments[i] + '!');
    }
    console.log(newData)
}

function addMark2() { // 방법2 : map 과 from method 사용
    // arguments 는 배열이 아니기 때문에 배열로 만들어줘야 한다. -> from method 이용
    let newArray = Array.from(arguments); //arguments 로 부터 배열을 만든다.
    let newData = newArray.map(function (value) {
       return value + '!';
    });
    console.log(newData)
}

addMark(1,2,3,4,5);
addMark2(1,2,3,4,5);