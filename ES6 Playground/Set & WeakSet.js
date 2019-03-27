//set : 중복없이 유일한 값을 저장하려 할 , 이미 존재하는지 체크할 때 유용

let mySet = new Set();

mySet.add('crong');
mySet.add('harry');
mySet.add('crong'); // 중복된 값은 추가 안 됨

console.log(mySet.has('crong')); // crong 있는지 확인
mySet.delete('crong'); // crong 삭제

mySet.forEach(function (v) {
    console.log(v)
});


// weakSet
// 참조를 가지고 있는 객체만 저장할 때 유용하다.
// 객체 형태를 중복없이 저장하려고 할 때 유용하다.

let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(111); // 숫자는 참조값이 없기때문에 WeakSet 에 저장 안 됨 (Invaild type)
ws.add('111'); // 문자열도 참조값이 없기때문에 WeakSet 에 저장 안 됨 (Invaild type)
ws.add(arr);
ws.add(arr2);
ws.add(obj);

arr = null; // 참조값이 없는 경우 WeakSet 에서 삭제한다.
arr2 = null;

console.log(ws);
console.log(ws.has(arr), ws.has(arr2));
