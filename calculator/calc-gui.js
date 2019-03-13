var input = {'array': []};
input.getInput = function () {
    return this.array.join("")
};

var output = {};
output.text = document.getElementById('output');

var clickNumbers = function (event) {
    str = event.target.innerHTML;
    console.log(str);

    if(str === 'del'){
        input.array.pop();
    } else if(str === '+' || str === '-' || str === '*' || str === '/'){
        // 연산자일 때 양 옆에 공백 추가
        input.array.push(' ' + str + ' ');
    } else{
        // 숫자일 때는 공백없이 숫자만 추가
        input.array.push(str);
    }

    if(input.array.length <1){ // 아무것도 없을 때 0 으로 표시
        output.text.innerText = '0'
    } else {
        output.text.innerText = input.getInput();
    }
};
var showResult = function (event) {
    console.log("click operations");
    console.log(event.target.innerHTML)
};
