// 입력 담당 객체
var input = {};
input.array = [];

// 입력한 수식 반환
input.getInput = function () {
    return this.array.join('')
};

// 숫자 가져오기
input.getValue = function () {
    const n = this.array.shift();

    if (Number(n)) {
        return Number(n)
    } else {
        alert('숫자가 아닙니다.')
    }
};

// 연산자 가져오기
input.getOperator = function () {
    const op = this.array.shift();

    if (op === '+' || op === '-' || op === '*' || op === '/') {
        return op
    } else {
        alert('연산자가 아닙니다.')
    }

};

// 계산 준비 (연산자 양옆 공백 없애기)
input.prepareCalculate = function () {
    this.array = this.getInput().split(' ')
};

// 인풋 배열 비었는지 확인
input.isEmpty = function () {
    return this.array.length < 1
};

// 결과값 인풋 배열에 담기
input.pushResultValueToInputArray = function (result_value) {
    this.array.push(result_value);
};


// 결과 담당 객체
var output = {};
output.text = document.getElementById('output');

// 입력한 수식 출력
output.displayInputValue = function () {
    this.text.innerHTML = input.getInput();
};

// 결과값 출력
output.printResult = function (result_value) {
    this.text.innerHTML = result_value;
};

// 버튼 핸들러
var clickNumbers = function (event) {
    const str = event.target.innerHTML;

    if (str === 'del') {
        input.array.pop();
    } else if (str === '+' || str === '-' || str === '*' || str === '/') {
        input.array.push(" " + str + " ");
    } else {
        input.array.push(str);
    }

    if (input.isEmpty()) {
        output.text.innerHTML = "0"
    } else {
        output.displayInputValue();
    }

};

// 계산 담당 객체
var calculator = {};
calculator.calculate = function (result, op, n2) {
    if (op === '+') {
        result += n2;
    } else if (op === '-') {
        result -= n2;
    } else if (op === '*') {
        result *= n2;
    } else if (op === '/') {
        result /= n2;
    } else {
        alert('올바른 수식이 아닙니다.')
    }
    return result
};

// 계산 결과 출력 ( `=` 연산자 )
var showResult = function () {
    input.prepareCalculate();

    // 첫 번째 숫자
    let result = input.getValue();

    // 수식 계산
    while (!input.isEmpty()) {
        const op = input.getOperator();
        const n2 = input.getValue();
        result = calculator.calculate(result, op, n2)
    }
    // 결과값 출력
    output.printResult(result);
    // 결과값 인풋 배열에 담기
    input.pushResultValueToInputArray(result);
};