var input = {};
input.array = [];

// 배열 초기화 - 비우고 마지막 게산값 담기
input.removeALl = function (value) {
  this.array = [];
  this.array.push(value)
};

// 값이 비어있는지 확인
input.isEmpty = function () {
  return this.array.length < 1
};

// 수식 전체 가져오기
input.getInput = function () {
  return this.array.join("");
};

// 계산 준비(공백 없애고 값과 수식 분리)
input.prepareCalculate = function () {
    return this.array = this.getInput().split(' ');
};

// 수식에서 숫자 가져오기
input.getValue = function () {
    var n = this.array.shift();
    if(Number(n)){
        return Number(n)
    } else {
        alert('숫자가 아닙니다.')
    }
};

// 수식에서 연산자 가져오기
input.getOperator = function () {
    var op = this.array.shift();
    if(op === '+' || op === '-' || op === '*' || op === '/'){
        return op
    } else {
        alert("연산자가 아닙니다.")
    }
};

// 출력 담당
var output = {};
output.text = document.getElementById('output');

// 계산 결과 출력
output.print = function (result) {
     this.text.innerHTML = result;
};

// 수식 출력
output.display = function () {
    this.text.innerHTML = input.getInput();
};

// 계산기 버튼 핸들러
var clickNumbers = function (event) {
  var str = event.target.innerHTML;
  console.log(str);

  if (str === 'del'){
      // del 버튼 누르면 배열에서 삭제
      input.array.pop();
  } else if ( str === '+' || str === '-' || str === '*' || str === '/'){
      // 연산자라면 양 옆에 공백 넣고 추가
      input.array.push(" " + str + " ");
  } else {
      // 숫자는 그대로 추가
      input.array.push(str);
  }

  if(input.array.length < 1){
      output.text.innerHTML = "0"
  } else {
      // 수식 출력
      output.display();
  }
};


var calculator = {};
calculator.calculate = function (result, op, n2) {
    if(op === '+'){
        result += n2;
    } else if(op === '-'){
        result -= n2;
    } else if(op === '*'){
        result *= n2;
    } else if(op === '/'){
        result /= n2;
    } else {
        alert("올바른 수식이 아닙니다.")
    }
    return result
};

// `=` 버튼 핸들러 함수
var showResult = function () {
    input.prepareCalculate();
    console.log("array:", input.array);

    var result = input.getValue();
    console.log("show:", input.array);

    while (!input.isEmpty()){
        op = input.getOperator(); // 배열에 연산자부터 담겨있으므로 getOperator 함수를 먼저 써야한다.
        n = input.getValue();
        result = calculator.calculate(result, op, n)
    }
    output.print(result);
    input.removeALl(result);

};