let word1 = document.getElementById('word1');
const word2 = document.getElementById('word2');
const check = document.getElementById('check');


// game 객체 생성
var game = {};
game.random_word  = function () {
    // words = ['HELLO', 'SEOUL', 'NEW YORK', 'SYDNEY', 'LONDON', 'TOKYO', 'SINGAPORE', 'CHICAGO', 'DANANG', 'HAWAI'];
    words = 'HELLO,SEOUL,NEWYORK,SYDNEY,LONDON,TOKYO,SINGAPORE,CHICAGO,DANANG,HAWAI'.split(',');
    rand_idx= Math.floor(Math.random()*words.length);
    return words[rand_idx];
};
let target_word = game.random_word();
word1.innerHTML = target_word;
game.word = target_word.split(''); // 글자 배열
game.btns = []; // 버튼 남을 배열

for (let i = 0; i < target_word.length; i++) {
    const btn = document.createElement('button');
    btn.innerHTML = target_word[i];
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
    if (game.word.join('') === target_word){
        check.innerHTML = '일치합니다.'
    } else {
        check.innerHTML = '일치하지 않습니다.'
    }
};

game.shuffle = function () {
    // 50% 확률로 뒤집기
    const toggle =  Math.floor(Math.random() * 2) === 0;
    if(toggle){
        swap()
    }

    // 랜덤확률로 오른쪽으로 밀
    const n = Math.floor(Math.random() * game.word.length);
    for(let i = 0; i < n; i++){
        shiftToRight()
    }
};
game.shuffle();