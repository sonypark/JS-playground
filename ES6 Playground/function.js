// arrow function
let newArr = [1,2,3,4,5].map( (value => value * 3));

console.log(newArr);

// this context of Arrow function
const myObj = {
    runTimeout(){
        setTimeout(()=>{
            this.printData();
        }, 20)
    },

    // Arrow 함수를 쓰면 this context 가 자동으로 적용된다. bind 를 안 해도 돼서 편리하다.
    // runTimeout(){
    //     setTimeout(function(){
    //         this.printData();
    //     }.bind(this), 20)
    // },

    printData(){
        console.log('hi codesquad!')
    }
};

myObj.runTimeout();


// default parameters
function sum(value, size = {value:1}) {
    return value * size.value;
}

console.log(sum(3));

// rest parameters
function checkNum(...argArray) { // parameter 에 ...이 있으면 매개변수를 배열로 만들어주는 rest parameter 이다.
    // const argArray = Array.prototype.slice.call(arguments); // 기존에 했던 방식
    console.log(argArray);
    const result = argArray.every((v) => typeof v === 'number');
    console.log(result)
}

const result = checkNum(10,2,"55");
// const result = checkNum(10,2,3,4,55);