const str = document.getElementById('str').innerHTML;
const word2 = document.getElementById('word2');

// game 객체 생성
var game = {};
game.word = str.split(''); // 글자 배열
game.btns = []; // 버튼 남을 배열

for (let i = 0; i < str.length; i++) {
    const btn = document.createElement('button');
    btn.innerHTML = str[i];
    word2.appendChild(btn);
    game.btns.push(btn)
}

game.copyBtnText = function () {
    for(let i = 0; i < this.word.length; i++){
        this.btns[i].innerHTML = this.word[i]
    }
};

var swap = function (event) {
    console.log('swap');
    game.word.reverse();
    game.copyBtnText();
    check_word();
};

var shiftToRight = function (event) {
    const s = game.word.pop();
    game.word.unshift(s);
    game.copyBtnText();
    check_word();
};

var shiftToLeft = function (event) {
    const s = game.word.shift();
    game.word.push(s);
    game.copyBtnText();
    check_word();
};

var check_word = function () {
    let s = "";
    for(let i = 0; i<game.word.length; i++){
        s += game.word[i]
    }
    if (s === str){
        document.getElementById('check').innerHTML = '일치합니다.'
    } else {
        document.getElementById('check').innerHTML = '일치하지 않습니다.'
    }
};