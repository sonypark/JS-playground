var input = {'array': []};

// 입력 배열을 초기화
input.removeALl = function(value){
    this.array = [];
    this.array.push(value);
};

// 수식 전체를 읽어옴
input.getInput = function () {
    return this.array.join("")
};

// 수식이 비었는지 검사
input.isEmpty = function() {
    return this.array.length < 1
};

// 계산 실행 전 준비 단계 (getValue 전 호출)
input.prepareCalculate = function(){
    this.array = this.getInput().split(" ");
};

// 수식에서 값을 읽어옴
input.getValue = function () {
    var n = this.array.shift();
    if(Number(n)){
        num = Number(n);
        return num;
    } else {
        alert("숫자가 아닙니다.")
    }
};

// 수식에서 연산자를 읽어옴
input.getOperator = function () {
    var op = this.array.shift();
    if(op === '+' || op === '-' || op === '*' || op === '/'){
        return op;
    } else {
        alert("올바른 연산자를 입력해주세요")
    }
};

// 출력 담당
var output = {};
output.text = document.getElementById('output');

// 계산 결과 출력
output.print = function (str) {
    this.text.innerHTML = str;
};

// 수식 출력
output.display = function () {
    this.text.innerHTML =  input.getInput();
};

// 계산기 버튼 핸들러
var clickNumbers = function (event) {
    target_word = event.target.innerHTML;
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

    if(input.isEmpty()){ // 아무것도 없을 때 0 으로 표시
        output.text.innerText = '0'
    } else {
        output.display();
    }
};

// 게산 담당
var calculator = {};
calculator.calculate = function (result, op, n2) {
        if(op === '+'){
            result += n2;
        }else if(op ==='-'){
            result -= n2;
        } else if(op ==='*'){
            result *= n2;
        } else if(op ==='/'){
            result /= n2;
        } else {
            result = "올바른 연산자가 아닙니다."
        }
        return result;
};

// `=` 버튼의 핸들러 함수
var showResult = function (event) {
    input.prepareCalculate();
    console.log("array: ", input.array);

    var result = input.getValue();
    console.log("show: ", result);

    while (!input.isEmpty()){
        op = input.getOperator();
        n2 = input.getValue();
        result = calculator.calculate(result, op, n2);
        console.log("show2: ", result, op, n2);
    }
    output.print(result);
    input.removeALl(result);
};
