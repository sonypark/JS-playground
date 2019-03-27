// JS 에서 자료를 다루는 방식
// Array, Object
// Array => set, weakSet (좀 더 개선된 방식)
// Object => map, weakMap (좀 더 개선된 방식)

// map 은 key / value 구조

let wm = new WeakMap();
let myfun = function () {};
// 이 함수가 얼마나 실행됐는지 알고자 할 때

wm.set(myfun, 0);
console.log(wm);

let count = 0;
for(let i=0; i<10; i++){
    count = wm.get(myfun); // get value
    count ++;
    wm.set(myfun, count);
}
console.log(wm.get(myfun));

myfun = null; // null 이면 참조값이 없으므로 weakMap 에서 사라짐
console.log(wm.get(myfun));


// WeakMap 활용 - private 한 변수를 만들 때 좋다.
const wm2 = new WeakMap();

function Area(height, width) {
    wm2.set(this, {height, width})
}

Area.prototype.getArea = function () {
    const {height, width} = wm2.get(this);
    return height * width
};

let myArea = new Area(10, 20);
console.log(myArea.getArea());
console.log(myArea.height); // 클래스 인스턴스에 접근 불가

console.log(wm2.has(myArea));
myArea = null; // 객체의 참조값이 null 이 되면 WeakMap 에서 사라짐
console.log(wm2.has(myArea));

